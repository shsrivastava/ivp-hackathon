import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "dashboard",
        component: DashboardComponent,
      },{
        path: "home/charts",
        component: ChartDashboardComponent,
      },
    ])
  ]
})
export class HomeRouteModule {}
