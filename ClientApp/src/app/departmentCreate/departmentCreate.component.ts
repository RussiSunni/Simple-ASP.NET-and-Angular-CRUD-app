import { Component, Inject } from '@angular/core';
import { DepartmentService } from '../department/department.service';
import { Department } from '../department/department';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://localhost:44319/api/Departments';

@Component({
  selector: 'app-departmentCreate',
  templateUrl: './departmentCreate.component.html',
})
export class DepartmentCreateComponent {
  
  constructor(private http: HttpClient) { }
   
  department = new FormGroup({
    name: new FormControl(''),
    manager: new FormControl('')  
  }); 

  onSubmit({ value }: { value: Department }) {
    console.log(value);
    this.department.reset();
    return this.http.post(baseUrl, value).subscribe();
    }
  }










