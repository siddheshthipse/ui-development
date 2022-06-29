import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCreationComponent } from './components/project-creation/project-creation.component';
import { NewLoginPageComponent } from './components/new-login-page/new-login-page.component';
import { EditProjectTemplateComponent } from './components/edit-project-template/edit-project-template.component';
import { SampleSearchComponent } from './sample-search/sample-search.component';


const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'project-creation',
    component:ProjectCreationComponent
  },
  {
    path:'login',
    component:NewLoginPageComponent
  },
  {
    path:'edit-project-template',
    component:EditProjectTemplateComponent
  },
  {
    path:'sample-search',
    component:SampleSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
