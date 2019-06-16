import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';
import {AgGridModule} from 'ag-grid-angular';
import { EmploymentAddComponent } from './employment-add/employment-add.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    SalaryComponent,
    EmploymentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
