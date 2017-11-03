import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projects } from './project';
import { ProjectService } from './projectnew.service';
@Component({
    selector: 'projectcomponent',
    templateUrl: './projectdetails.component.html',
    styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
    Project: projects[];
    selectedApp: projects;
    constructor(private router: Router, private projectService: ProjectService) { }
    getProjectsne(): void {
        this.projectService.getProjectsne().then(Project => this.Project = Project);
    }

    ngOnInit(): void {
        this.getProjectsne();
    }

    onSelect(project:projects): void {
        this.selectedApp = project;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedApp.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.projectService.create(name)
            .then(project => {
                this.Project.push(project);
                this.selectedApp = null;
            });
    }

    delete(project: projects): void {
        this.projectService
            .delete(project.id)
            .then(() => {
                this.Project = this.Project.filter(h => h !== project);
                if (this.selectedApp === project) { this.selectedApp = null; }
            });
    }
                

}