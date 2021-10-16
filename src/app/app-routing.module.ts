import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [

  {path:'',component:HomeComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'display-student',component:DisplayStudentComponent},
  {path:'view/:id',component:ViewStudentComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-rest',component:AddRestaurantComponent},
  {path:'view-rest',component:ViewRestaurantComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
