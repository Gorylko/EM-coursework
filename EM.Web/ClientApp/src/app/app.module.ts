import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/modules/material.module';
import { PageToolbarComponent } from './nav-menu/page-toolbar/page-toolbar.component';
import { PageSidebarStateService } from './data/page-sidebar-state.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        EmployeesListComponent,
        EmployeeDetailsComponent,
        PageToolbarComponent,
        FooterComponent,
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
    ],

    providers: [PageSidebarStateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
