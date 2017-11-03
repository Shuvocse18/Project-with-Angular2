import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpoyeeComponent } from './employees/employee.component';
import { LandingPage } from './LandingPage/landingpage.component';
import { LoginPage } from './Login/login.component';
import { AboutusPage } from './AboutUs/aboutus.component';
import { ContactPage } from './Contacts/contacts.component';
import { ProjectDetailsInput } from './projectdetails.component';
import { ProjectService } from './projectnew.service';
import { ProjectHomePageComponent } from './projecthomepage.component';
import { ProjectComponent } from './project.component';

import { AppRoutingModule } from './projectrouting.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './projectarray.service';
import { SearchProject } from './searchproject.component';



@NgModule({
    imports: [BrowserModule, FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule],
    //declarations: [AppComponent, EmpoyeeComponent, LandingPage, LoginPage, AboutusPage, ContactPage],
    declarations: [AppComponent, ProjectHomePageComponent,
        ProjectDetailsInput, ProjectComponent,
        SearchProject
    ],
    providers: [ProjectService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
