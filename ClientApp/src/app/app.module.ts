import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { EmployeeCreateEditComponent } from './employeeCreateEdit/employeeCreateEdit.component';
import { DepartmentListComponent } from './departmentList/departmentList.component';
import { DepartmentCreateEditComponent } from './departmentCreateEdit/departmentCreateEdit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatIconModule, MatIconRegistry, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeCreateEditComponent,
    DepartmentListComponent,
    DepartmentCreateEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
