import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from '../department/department.service';
import { Department } from '../department/department';

@Component({
  selector: 'app-departmentCreateEdit',
  templateUrl: './departmentCreateEdit.component.html',
})
export class DepartmentCreateEditComponent {

  //saveDepartment(): void {
  //  const newDepartment: Department = Object.assign({}, this.department);
  //  this._departmentService.save(newDepartment);
  //  //this.createDepartmentForm.reset();
  //  //this._router.navigate(['list');
  //}

  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ////ngOnInit() {
  ////  this.getDepartments();
  ////}

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.departmentService.addDepartment({ name } as Department)
      .subscribe(department => {
        this.departments.push(department);
      });
  } 

}


