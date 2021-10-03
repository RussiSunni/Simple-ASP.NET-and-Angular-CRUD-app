import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employeeList.component.html',
})

export class EmployeeListComponent {
  public employees: Employee[];

  constructor(http: HttpClient, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }


}
