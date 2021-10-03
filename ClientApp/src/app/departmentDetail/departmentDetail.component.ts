import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DepartmentService } from '../department/department.service';
import { Department } from '../department/department';

@Component({
  selector: 'app-departmentDetail',
  templateUrl: './departmentDetail.component.html'
})
export class DepartmentDetailComponent implements OnInit {
  department: Department | undefined;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDepartment();
  }

  getDepartment(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.departmentService.getDepartment(id)
      .subscribe(department => this.department = department);
  }

  goBack(): void {
    this.location.back();
  }

  //save(): void {
  //  if (this.department) {
  //    this.departmentService.updateDepartment(this.department)
  //      .subscribe(() => this.goBack());
  //  }
  //}
}
