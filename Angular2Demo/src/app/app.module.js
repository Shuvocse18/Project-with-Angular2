"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var projectdetails_component_1 = require("./projectdetails.component");
var projectnew_service_1 = require("./projectnew.service");
var projecthomepage_component_1 = require("./projecthomepage.component");
var project_component_1 = require("./project.component");
var projectrouting_module_1 = require("./projectrouting.module");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var projectarray_service_1 = require("./projectarray.service");
var searchproject_component_1 = require("./searchproject.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(projectarray_service_1.InMemoryDataService),
            projectrouting_module_1.AppRoutingModule],
        //declarations: [AppComponent, EmpoyeeComponent, LandingPage, LoginPage, AboutusPage, ContactPage],
        declarations: [app_component_1.AppComponent, projecthomepage_component_1.ProjectHomePageComponent,
            projectdetails_component_1.ProjectDetailsInput, project_component_1.ProjectComponent,
            searchproject_component_1.SearchProject
        ],
        providers: [projectnew_service_1.ProjectService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map