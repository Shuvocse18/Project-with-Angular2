import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { projects } from './project';
import { ProjectService } from './projectnew.service';

@Component({

    selector: 'projectdetails',

    templateUrl:'./projectdetails.component.html', 
        

styleUrls:['./projectdetails.component.css']

})

export class ProjectDetailsInput implements OnInit {
    Project: projects;

    constructor(
        private projectservice: ProjectService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.projectservice.getProjectsnew(+params.get('id')))
            .subscribe(Project => this.Project = Project);
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.projectservice.update(this.Project)
            .then(() => this.goBack());
    }

}