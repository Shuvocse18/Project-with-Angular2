import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ProjectSearchService } from './searchproject.service';
import { projects } from './project';

@Component({

    selector: 'projectsearch',
    templateUrl: './searchproject.component.html',
    styleUrls: ['./searchproject.component.css'],
    providers: [ProjectSearchService]

})

export class SearchProject implements OnInit{

    PROJECTS: Observable<projects[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private projectsearchservice: ProjectSearchService,
        private router: Router) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.PROJECTS = this.searchTerms
            .debounceTime(300)       
            .distinctUntilChanged()  
            .switchMap((term: any) => term                
                ? this.projectsearchservice.search(term)
                : Observable.of<projects[]>([]))
            .catch((error: any )=> {
                
                console.log(error);
                return Observable.of<projects[]>([]);
            });
    }

    gotoDetail(project: projects): void {
        let link = ['/detail', project.id];
        this.router.navigate(link);
    }



}