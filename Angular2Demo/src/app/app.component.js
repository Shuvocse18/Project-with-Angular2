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
var projectnew_service_1 = require("./projectnew.service");
//import { ProjectService } from './project.service';
//import { PROJECTS } from './projectarray';
var AppComponent = (function () {
    function AppComponent(projservice) {
        this.projservice = projservice;
        this.title = 'Luminux Projects';
    }
    AppComponent.prototype.getProjects = function () {
        var _this = this;
        this.projservice.getProjects().then(function (Projects) { return _this.Projects = Projects; }); //
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{title}}</h1>\n    <nav>\n    <ul class=\"nav nav=tabs\">\n    <li>\n      <a routerLink=\"/ProjectHomePage\" routerLinkActive=\"active\">Project Home Page</a>\n    </li>\n      </ul>\n    </nav>\n    <router-outlet></router-outlet>\n\n   \n   \n    \n   \n  ",
        styleUrls: ["./app.component.css"]
    }),
    __metadata("design:paramtypes", [projectnew_service_1.ProjectService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map