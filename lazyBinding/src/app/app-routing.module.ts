import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app/app.component';
import {EmployeeComponent} from '../app/employee/employee.component';
import {SalaryComponent} from '../app/salary/salary.component';

const routes: Routes = [
{path: 'admin',
component: AppComponent,
},
{path: 'salary',
component: SalaryComponent,
},
{path: 'employee',
component: EmployeeComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
