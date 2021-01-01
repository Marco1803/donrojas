import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { TopnavbarComponent } from './layout/topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './layout/asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './layout/footernavbar/footernavbar.component';
import { CustomnavbarComponent } from './layout/customnavbar/customnavbar.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { TablesComponent } from './modulos/tables/tables.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    CustomnavbarComponent,
    DashboardComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
