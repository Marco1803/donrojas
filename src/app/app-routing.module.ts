import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { TablesComponent } from './modulos/tables/tables.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'modulos',component:AppLayoutComponent,children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tables', component: TablesComponent}
  ]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
