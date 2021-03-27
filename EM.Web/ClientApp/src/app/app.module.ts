import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table'  

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesListItemComponent } from './employees-list-item/employees-list-item.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        EmployeesListComponent,
        EmployeesListItemComponent,
        EmployeeDetailsComponent,
    ],
    imports: [
        ReactiveFormsModule,
        MatPaginatorModule,
        MatChipsModule,
        MatTableModule,
        MatSortModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
