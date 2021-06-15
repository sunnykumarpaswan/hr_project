// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstComponent } from './first/first.component';
import { HrComponent } from './hr/hr.component';
import { SecondComponent } from './second/second.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  
   { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent ,canActivate: [AuthGuard]},
  { path: 'hr', component: HrComponent ,canActivate: [AuthGuard]},
  { path: 'user', component: UserComponent ,canActivate: [AuthGuard]},
  { path: '**', pathMatch:'full',redirectTo:"first"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


