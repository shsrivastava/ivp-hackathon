import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "dashboard",
        component: ChartDashboardComponent,
      },{
        path: "add-form",
        component: AddFormComponent,
      },
    ])
  ]
})
export class HomeRouteModule {}
