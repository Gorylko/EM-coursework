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
import { FilesTreeComponent } from './files-tree/files-tree.component';
import { FilesDataService } from './services/files-data.service';
import { EmployeesDataService } from './services/employees-data.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        EmployeesListComponent,
        EmployeeDetailsComponent,
        PageToolbarComponent,
        FooterComponent,
        FilesTreeComponent,
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

    providers: [
        PageSidebarStateService,
        FilesDataService,
        EmployeesDataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
