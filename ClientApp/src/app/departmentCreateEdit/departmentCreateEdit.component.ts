import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from '../department/department.service';
import { Department } from '../department/department';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'https://localhost:44319';

@Component({
  selector: 'app-departmentCreateEdit',
  templateUrl: './departmentCreateEdit.component.html',
})
export class DepartmentCreateEditComponent {
  
  constructor(private http: HttpClient) { }
   
  department = new FormGroup({
    name: new FormControl(''),
    manager: new FormControl('')  
  }); 

  onSubmit({ value }: { value: Department }) {
    console.log(value);
    this.department.reset();
    return this.http.post(baseUrl+'/departments', value).subscribe();
    }
  }










