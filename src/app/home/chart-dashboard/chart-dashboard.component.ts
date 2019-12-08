import { Component, ViewChild, HostListener } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DxChartComponent } from 'devextreme-angular';

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.scss']
})
export class ChartDashboardComponent {
  @ViewChild("chart1",{static: false}) 
  chart1: DxChartComponent


  prepareChart : boolean = false;
  cols : number = 2;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.cols = 1;
        return [
          { id:1,title: 'Chart 1', cols: 1, rows: 1 },
          { id:2,title: 'Chart 2', cols: 1, rows: 1 },
          { id:3,title: 'Chart 3', cols: 1, rows: 3 },
          { id:4,title: 'Chart 4', cols: 1, rows: 1 }
        ];
      }
      this.cols = 2;
      return [
        { id:1,title: 'Chart 1', cols: 2, rows: 1 },
        { id:2,title: 'Chart 2', cols: 1, rows: 1 },
        { id:3,title: 'Chart 3', cols: 1, rows: 2 },
        { id:4,title: 'Chart 4', cols: 1, rows: 1 }
      ];
    })
  );
  
  
  public tiles: number[] = [1, 2, 3, 4, 5, 6];
  
  constructor(private breakpointObserver: BreakpointObserver) {
    setTimeout(() => {
      this.prepareChart = true
    }, 1000);
  }

  title: string = "Correlation between Total Population and\n Population with Age over 60";
    dataSource: any[]= [{
      total1: 9.5,
      total2: 168.8,
      total3: 127.2,
      older1: 2.4,
      older2: 8.8,
      older3: 40.1,
      perc1: 25.4,
      perc2: 5.3,
      perc3: 31.6,
      tag1: 'Sweden',
      tag2: 'Nigeria',
      tag3: 'Japan'
  }, {
      total1: 82.8,
      total2: 91.7,
      total3: 90.8,
      older1: 21.9,
      older2: 4.6,
      older3: 8.0,
      perc1: 26.7,
      perc2: 5.4,
      perc3: 8.9,
      tag1: 'Germany',
      tag2: 'Ethiopia',
      tag3: 'Viet Nam'
  }, {
      total1: 16.7,
      total2: 80.7,
      total3: 21.1,
      older1: 3.8,
      older2: 7.0,
      older3: 2.7,
      perc1: 22.8,
      perc2: 8.4,
      perc3: 12.9,
      tag1: 'Netherlands',
      tag2: 'Egypt',
      tag3: 'Sri Lanka'
  }, {
      total1: 62.8,
      total2: 52.4,
      total3: 96.7,
      older1: 14.4,
      older2: 4.0,
      older3: 5.9,
      perc1: 23.0,
      perc2: 7.8,
      perc3: 6.1,
      tag1: 'United Kingdom',
      tag2: 'South Africa',
      tag3: 'Philippines'
  }, {
      total1: 38.2,
      total2: 43.2,
      total3: 66.8,
      older1: 7.8,
      older2: 1.8,
      older3: 9.6,
      perc1: 20.4,
      perc2: 4.3,
      perc3: 13.7,
      tag1: 'Poland',
      tag2: 'Kenya',
      tag3: 'Thailand'
  }, {
      total1: 45.5,
      total3: 154.7,
      total4: 34.8,
      older1: 9.5,
      older3: 10.3,
      older4: 7.2,
      perc1: 21.1,
      perc3: 6.8,
      perc4: 20.8,
      tag1: 'Ukraine',
      tag3: 'Bangladesh',
      tag4: 'Canada'
  }, {
      total1: 143.2,
      total4: 120.8,
      older1: 26.5,
      older4: 11.0,
      perc1: 18.6,
      perc4: 9.5,
      tag1: 'Russian Federation',
      tag4: 'Mexico'
  }];;
    correlationSource: any[]= [{
      name: "Europe",
      argumentField: "total1",
      valueField: "older1",
      sizeField: "perc1",
      tagField: "tag1"
  }, {
      name: "Africa",
      argumentField: "total2",
      valueField: "older2",
      sizeField: "perc2",
      tagField: "tag2"
  }, {
      name: "Asia",
      argumentField: "total3",
      valueField: "older3",
      sizeField: "perc3",
      tagField: "tag3"
  }, {
      name: "North America",
      argumentField: "total4",
      valueField: "older4",
      sizeField: "perc4",
      tagField: "tag4"
  }]

    

  @HostListener('window:resize')
  public onResize() {
    this.chart1.instance.refresh();
  }

    customizeTooltip(arg: any) {
      return {
          text: arg.point.tag + '<br/>Total Population: ' + arg.argumentText + 'M <br/>Population with Age over 60: ' + arg.valueText + 'M (' + arg.size + '%)'
      };
  }

  argumentCustomizeText(args: any) {
      return args.value + 'M';
  }

  valueCustomizeText(args: any) {
      return args.value + 'M';
  }

  onSeriesClick(e: any) {
      var series = e.target;
      if (series.isVisible()) {
          series.hide();
      } else {
          series.show();
      }
  }

  oilPrices = [{
    date: new Date(2005, 0, 1),
    aVal1: 36,
    aVal2: 43.29,
    tVal1: 42.12,
    tVal2: 49.91
}, {
    date: new Date(2005, 1, 1),
    aVal1: 40.68,
    aVal2: 47.07,
    tVal1: 28.33,
    tVal2: 51.75
}, {
    date: new Date(2005, 2, 1),
    aVal1: 45.01,
    aVal2: 52.77,
    tVal1: 48.96,
    tVal2: 56.72
}, {
    date: new Date(2005, 3, 1),
    aVal1: 45.99,
    aVal2: 54.14,
    tVal1: 49.72,
    tVal2: 57.27
}, {
    date: new Date(2005, 4, 1),
    aVal1: 43.73,
    aVal2: 49.03,
    tVal1: 46.8,
    tVal2: 52.07
}, {
    date: new Date(2005, 5, 1),
    aVal1: 49.94,
    aVal2: 57.94,
    tVal1: 52.54,
    tVal2: 60.54
}, {
    date: new Date(2005, 6, 1),
    aVal1: 52.88,
    aVal2: 58.98,
    tVal1: 54.93,
    tVal2: 61.28
}, {
    date: new Date(2005, 7, 1),
    aVal1: 58.81,
    aVal2: 67.06,
    tVal1: 60.86,
    tVal2: 68.94
}, {
    date: new Date(2005, 8, 1),
    aVal1: 61,
    aVal2: 66.72,
    tVal1: 63,
    tVal2: 69.47
}, {
    date: new Date(2005, 9, 1),
    aVal1: 57.86,
    aVal2: 63.47,
    tVal1: 59.76,
    tVal2: 65.47
}, {
    date: new Date(2005, 10, 1),
    aVal1: 54.24,
    aVal2: 59.98,
    tVal1: 56.14,
    tVal2: 61.78
}, {
    date: new Date(2005, 11, 1),
    aVal1: 55.22,
    aVal2: 59.22,
    tVal1: 57.34,
    tVal2: 61.37
}];

}
