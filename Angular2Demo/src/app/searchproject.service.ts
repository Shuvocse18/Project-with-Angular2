import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { projects } from './project';

@Injectable()
export class ProjectSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<projects[]> {
        return this.http
            .get(`api/PROJECT/?name=${term}`)
            .map(response => response.json().data as projects[]);
    }
}