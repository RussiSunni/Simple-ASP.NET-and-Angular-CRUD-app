import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { EmployeeCreateEditComponent } from './employeeCreateEdit/employeeCreateEdit.component';
import { DepartmentListComponent } from './departmentList/departmentList.component';
import { DepartmentCreateEditComponent } from './departmentCreateEdit/departmentCreateEdit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'employee-list', component: EmployeeListComponent, pathMatch: 'full' },
  { path: 'employee-create-edit', component: EmployeeCreateEditComponent, pathMatch: 'full' },
  { path: 'department-list', component: DepartmentListComponent, pathMatch: 'full' },
  { path: 'department-create-edit', component: DepartmentCreateEditComponent, pathMatch: 'full' }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
