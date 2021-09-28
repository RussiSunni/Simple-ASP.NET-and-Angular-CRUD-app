import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employeeList.component.html',
})

export class EmployeeListComponent {

  employees = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
}
