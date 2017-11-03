import { Component, OnInit } from '@angular/core';

import { projects } from './project';
import { ProjectService } from './projectnew.service'
//import { ProjectService } from './project.service';
//import { PROJECTS } from './projectarray';







@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <nav>
    <ul class="nav nav=tabs">
    <li>
      <a routerLink="/ProjectHomePage" routerLinkActive="active">Project Home Page</a>
    </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>

   
   
    
   
  `,
   
    styleUrls: [`./app.component.css`]
   

      
})


export class AppComponent{

    title = 'Luminux Projects';
    //Projects = PROJECTS;
    Projects : projects[];
    
    selectedApp: projects;
    constructor(private projservice: ProjectService) { }

    getProjects(): void {
        this.projservice.getProjects().then(Projects => this.Projects = Projects);//

    }

   /* ngOnInit(): void {
        this.getProjects();
    }

    onSelect(project: projects): void {
        this.selectedApp = project;
    }*/
  /*  ngOnInit(): void {
        this.getProjects();
    }

    getProjects(): void {
        this.ProjectService.getProjects().then(Projects => this.Projects = Projects);
    }*/

   
}


