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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var projectnew_service_1 = require("./projectnew.service");
var ProjectDetailsInput = (function () {
    function ProjectDetailsInput(projectservice, route, location) {
        this.projectservice = projectservice;
        this.route = route;
        this.location = location;
    }
    ProjectDetailsInput.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.projectservice.getProjectsnew(+params.get('id')); })
            .subscribe(function (Project) { return _this.Project = Project; });
    };
    ProjectDetailsInput.prototype.goBack = function () {
        this.location.back();
    };
    ProjectDetailsInput.prototype.save = function () {
        var _this = this;
        this.projectservice.update(this.Project)
            .then(function () { return _this.goBack(); });
    };
    return ProjectDetailsInput;
}());
ProjectDetailsInput = __decorate([
    core_1.Component({
        selector: 'projectdetails',
        templateUrl: './projectdetails.component.html',
        styleUrls: ['./projectdetails.component.css']
    }),
    __metadata("design:paramtypes", [projectnew_service_1.ProjectService,
        router_1.ActivatedRoute,
        common_1.Location])
], ProjectDetailsInput);
exports.ProjectDetailsInput = ProjectDetailsInput;
//# sourceMappingURL=projectdetails.component.js.map