import { Component, OnInit } from '@angular/core';

import { projects } from './project';
import { PROJECTS } from './projectarray';

import { ProjectService } from './projectnew.service';

@Component({
    selector: 'projecthomepage',
    templateUrl: './projecthomepage.component.html',
    styleUrls: ['./projecthomepage.component.css']

})

export class ProjectHomePageComponent {

    Project: projects[] = [];
    constructor(private projectservice: ProjectService) { }

    ngOnInit(): void {
        this.projectservice.getProjectsne()
            .then(Project => this.Project = Project.slice(1, 6));
    }
}

