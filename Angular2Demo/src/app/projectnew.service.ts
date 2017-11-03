import { Injectable } from '@angular/core';
import { projects } from './project';
//import { PROJECTS } from './projectarray';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private projectUrl = 'http://localhost:3000/api/PROJECTS';

    constructor(private http: Http) { }

    getProjects(): Promise<projects[]> {
        
        return new Promise(resolve => {

            setTimeout(() => resolve(this.getProjectsne()), 2000);
        });
    }

   /* getProjectsne(): Promise<projects[]> {
        return Promise.resolve(PROJECTS);
    }*/

    getProjectsne(): Promise<projects[]> {
        return this.http.get(this.projectUrl)
            .toPromise()
            .then(response => response.json().data as projects[])
            .catch(this.handleError);
    }

    /*getProjectsnew(id: number): Promise<projects> {

        return this.getProjectsne()
            .then(Project => Project.find(project => project.id === id));
        return new Promise(resolve => {

            setTimeout(() => resolve(this.getProjects()), 2000);
        });*/

    getProjectsnew(id: number): Promise<projects> {
        const url = `${this.projectUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as projects)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

    create(name: string): Promise<projects> {
        return this.http
            .post(this.projectUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as projects)
            .catch(this.handleError);
    }

    update(project: projects): Promise<projects> {
        const url = `${this.projectUrl}/${project.id}`;
        return this.http
            .put(url, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.projectUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }



  



}

