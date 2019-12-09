import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRouteModule } from './home.route';
import { ChartComponent } from './chart/chart.component';
import { AnalyticsCardComponent } from './analytics-card/analytics-card.component';
import { MatCardModule, MatIconModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { DxDataGridModule, DxRangeSelectorModule } from 'devextreme-angular';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DxChartModule } from 'devextreme-angular';
import { GridViewComponent } from './grid-view/grid-view.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [DashboardComponent, ChartComponent, AnalyticsCardComponent, ChartDashboardComponent, GridViewComponent, AddFormComponent],
  imports: [
    HomeRouteModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    DxDataGridModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    DxChartModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    DxRangeSelectorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ]
})
export class HomeModule { }
