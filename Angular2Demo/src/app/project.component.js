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
var router_1 = require("@angular/router");
var projectnew_service_1 = require("./projectnew.service");
var ProjectComponent = (function () {
    function ProjectComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
    }
    ProjectComponent.prototype.getProjectsne = function () {
        var _this = this;
        this.projectService.getProjectsne().then(function (Project) { return _this.Project = Project; });
    };
    ProjectComponent.prototype.ngOnInit = function () {
        this.getProjectsne();
    };
    ProjectComponent.prototype.onSelect = function (project) {
        this.selectedApp = project;
    };
    ProjectComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedApp.id]);
    };
    ProjectComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.projectService.create(name)
            .then(function (project) {
            _this.Project.push(project);
            _this.selectedApp = null;
        });
    };
    ProjectComponent.prototype.delete = function (project) {
        var _this = this;
        this.projectService
            .delete(project.id)
            .then(function () {
            _this.Project = _this.Project.filter(function (h) { return h !== project; });
            if (_this.selectedApp === project) {
                _this.selectedApp = null;
            }
        });
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    core_1.Component({
        selector: 'projectcomponent',
        templateUrl: './projectdetails.component.html',
        styleUrls: ['./project.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, projectnew_service_1.ProjectService])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map