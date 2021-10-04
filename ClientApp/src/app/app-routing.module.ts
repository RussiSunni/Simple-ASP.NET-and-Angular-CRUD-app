import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { EmployeeCreateComponent } from './employeeCreate/employeeCreate.component';
import { EmployeeDetailComponent } from './employeeDetail/employeeDetail.component';
import { DepartmentListComponent } from './departmentList/departmentList.component';
import { DepartmentCreateComponent } from './departmentCreate/departmentCreate.component';
import { DepartmentDetailComponent } from './departmentDetail/departmentDetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'employee-list', component: EmployeeListComponent},
  { path: 'employee-create', component: EmployeeCreateComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'department-list', component: DepartmentListComponent},
  { path: 'department-create', component: DepartmentCreateComponent},
  { path: 'departments/:id', component: DepartmentDetailComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
