import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../shared/services/companyData/company-data.service';
import { HomeInterface } from '../shared/interfaces/home-interfaces';
import {DxDataGridComponent} from 'devextreme-angular'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public companyData: HomeInterface.ICompanyData[] = [];
public showGrid : boolean = false;

  constructor(private _companyDataService: CompanyDataService) { }

  ngOnInit() {
    this.showGrid = false;
    this.getCompanyData();
  }

  public tiles: number[] = [1, 2, 3, 4, 5, 6];

  public getCompanyData() {
    this._companyDataService.getData().subscribe(result => {
      console.log(result);
      this.companyData = result;
      this.showGrid = true;
    })
  }
}
