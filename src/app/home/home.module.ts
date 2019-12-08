import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRouteModule } from './home.route';
import { ChartComponent } from './chart/chart.component';
import { AnalyticsCardComponent } from './analytics-card/analytics-card.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { DxDataGridModule } from 'devextreme-angular';



@NgModule({
  declarations: [DashboardComponent, ChartComponent, AnalyticsCardComponent],
  imports: [
    HomeRouteModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    DxDataGridModule
  ]
})
export class HomeModule { }
