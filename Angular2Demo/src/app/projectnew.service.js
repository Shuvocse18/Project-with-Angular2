"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//import { PROJECTS } from './projectarray';
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.projectUrl = 'http://localhost:3000/api/PROJECTS';
    }
    ProjectService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getProjectsne()); }, 2000);
        });
    };
    /* getProjectsne(): Promise<projects[]> {
         return Promise.resolve(PROJECTS);
     }*/
    ProjectService.prototype.getProjectsne = function () {
        return this.http.get(this.projectUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /*getProjectsnew(id: number): Promise<projects> {

        return this.getProjectsne()
            .then(Project => Project.find(project => project.id === id));
        return new Promise(resolve => {

            setTimeout(() => resolve(this.getProjects()), 2000);
        });*/
    ProjectService.prototype.getProjectsnew = function (id) {
        var url = this.projectUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProjectService.prototype.create = function (name) {
        return this.http
            .post(this.projectUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ProjectService.prototype.update = function (project) {
        var url = this.projectUrl + "/" + project.id;
        return this.http
            .put(url, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(function () { return project; })
            .catch(this.handleError);
    };
    ProjectService.prototype.delete = function (id) {
        var url = this.projectUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=projectnew.service.js.map