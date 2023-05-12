import { Component, Input } from '@angular/core';

import { Employee } from '../employee';

export const employeeIdQueryParam = 'employeeId';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  @Input() list: Employee[] = [];
  @Input() selectedId?: number;

  queryParamKey = employeeIdQueryParam;
}
