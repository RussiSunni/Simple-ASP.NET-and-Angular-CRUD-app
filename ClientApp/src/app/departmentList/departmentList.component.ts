import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-departmentList',
  templateUrl: './departmentList.component.html',
})
export class DepartmentListComponent {
  public departments: Department[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Department[]>(baseUrl + 'departments').subscribe(result => {
      this.departments = result;
    }, error => console.error(error));
  }
}

interface Department {
  name: string;
  manager: string;
  status: string;
}

