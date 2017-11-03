import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsInput } from './projectdetails.component';
import { ProjectService } from './projectnew.service';
import { ProjectHomePageComponent } from './projecthomepage.component';
import { ProjectComponent } from './project.component';
import { provideRoutes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/ProjectHomePageComponent', pathMatch: 'full' },
    { path: 'ProjectHomePage', component: ProjectHomePageComponent },
    { path: 'detail/:id', component: ProjectDetailsInput },
    { path: 'Project', component: ProjectComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

