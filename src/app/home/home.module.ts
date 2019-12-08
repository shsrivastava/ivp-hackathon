import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRouteModule } from './home.route';
import { ChartComponent } from './chart/chart.component';
import { AnalyticsCardComponent } from './analytics-card/analytics-card.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { DxDataGridModule } from 'devextreme-angular';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DxChartModule } from 'devextreme-angular';




@NgModule({
  declarations: [DashboardComponent, ChartComponent, AnalyticsCardComponent, ChartDashboardComponent],
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
    DxChartModule
  ]
})
export class HomeModule { }
