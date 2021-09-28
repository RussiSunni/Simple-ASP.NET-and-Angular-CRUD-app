import { Component } from '@angular/core';

@Component({
  selector: 'app-departmentList',
  templateUrl: './departmentList.component.html',
})
export class DepartmentListComponent {

  departments = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
}
