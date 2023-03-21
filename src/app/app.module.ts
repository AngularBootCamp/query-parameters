import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail-view/employee-detail-view.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeViewerComponent } from './employees-viewer/employee-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    EmployeeFilterComponent,
    EmployeeListComponent,
    EmployeeViewerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
