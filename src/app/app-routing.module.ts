import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkplaceComponent } from './components/workplace/workplace.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'workplace',
    component:WorkplaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
