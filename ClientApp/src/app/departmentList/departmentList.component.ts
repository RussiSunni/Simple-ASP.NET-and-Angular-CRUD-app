import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../department/department';
import { DepartmentService } from '../department/department.service';


@Component({
  selector: 'app-departmentList',
  templateUrl: './departmentList.component.html',
})
export class DepartmentListComponent {
  public departments: Department[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private departmentService: DepartmentService) {
    http.get<Department[]>(baseUrl + 'departments').subscribe(result => {
      this.departments = result;
    }, error => console.error(error));
  }

  delete(department: Department): void {
    this.departments = this.departments.filter(h => h !== department);
    this.departmentService.deleteDepartment(department.id).subscribe();
  }

}
 
