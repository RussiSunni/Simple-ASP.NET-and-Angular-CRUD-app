import { Component, Inject } from '@angular/core';
import { EmployeeService } from '../employee/mployee.service';
import { Employee } from '../employee/employee';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://localhost:44319/api/Employees';

@Component({
  selector: 'app-employeeCreate',
  templateUrl: './employeeCreate.component.html',
})
export class EmployeeCreateComponent {

  constructor(private http: HttpClient) { }

  employee = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    telnumber: new FormControl(''),
    email: new FormControl(''),
    manager: new FormControl(''),
    status: new FormControl('')
  });

  onSubmit({ value }: { value: Employee }) {
    console.log(value);
    this.employee.reset();
    return this.http.post(baseUrl, value).subscribe();
  }
}
  

