import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';

import { Employee } from '../employee';
import { EmployeeLoaderService } from '../employee-loader.service';

@Component({
  selector: 'app-employee-viewer',
  templateUrl: './employee-viewer.component.html',
  styleUrls: ['./employee-viewer.component.scss']
})
export class EmployeeViewerComponent {
  filteredList: Observable<Employee[]>;
  selectedEmployee: Observable<Employee | undefined>;

  constructor(
    employeeLoader: EmployeeLoaderService,
    route: ActivatedRoute
  ) {
    this.filteredList = route.queryParamMap.pipe(
      map(params => params.get('employeeFilter')),
      switchMap(filter => employeeLoader.getList(filter ?? ''))
    );

    this.selectedEmployee = route.queryParamMap.pipe(
      map(params => params.get('employeeId')),
      switchMap(id => {
        if (id) {
          return employeeLoader.getDetails(id);
        } else {
          return of(undefined);
        }
      })
    );
  }
}
