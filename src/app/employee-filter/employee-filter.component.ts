import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  startWith
} from 'rxjs';

@Component({
  selector: 'employee-filter',
  templateUrl: './employee-filter.component.html'
})
export class EmployeeFilterComponent implements OnDestroy {
  employeeFilter: FormControl<string | null>;
  subscription: Subscription;

  constructor(route: ActivatedRoute, private router: Router) {
    const employeeFilterDefaultValue =
      route.snapshot.queryParamMap.get('employeeFilter');
    this.employeeFilter = new FormControl(employeeFilterDefaultValue);

    this.subscription = this.employeeFilter.valueChanges
      .pipe(
        startWith(this.employeeFilter.value),
        debounceTime(250),
        distinctUntilChanged()
      )
      .subscribe(filterText => {
        const queryParams = {
          employeeFilter: filterText || undefined
        };
        void this.router.navigate([], {
          queryParams,
          queryParamsHandling: 'merge'
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
