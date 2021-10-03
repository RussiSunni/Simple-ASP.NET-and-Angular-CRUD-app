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

  constructor(http: HttpClient, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }

  delete(department: Department): void {
    this.departments = this.departments.filter(h => h !== department);
    this.departmentService.deleteDepartment(department.id).subscribe();
  }   
}
 
