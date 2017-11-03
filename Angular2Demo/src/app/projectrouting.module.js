"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var projectdetails_component_1 = require("./projectdetails.component");
var projecthomepage_component_1 = require("./projecthomepage.component");
var project_component_1 = require("./project.component");
var routes = [
    { path: '', redirectTo: '/ProjectHomePageComponent', pathMatch: 'full' },
    { path: 'ProjectHomePage', component: projecthomepage_component_1.ProjectHomePageComponent },
    { path: 'detail/:id', component: projectdetails_component_1.ProjectDetailsInput },
    { path: 'Project', component: project_component_1.ProjectComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=projectrouting.module.js.map