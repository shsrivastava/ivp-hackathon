import { Component, OnInit } from '@angular/core';
import { HomeInterface } from '../shared/interfaces/home-interfaces';
import { CompanyDataService } from '../shared/services/companyData/company-data.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  public companyData: HomeInterface.ICompanyData[] = [];
  public showGrid: boolean = false;
  public popupPosition: any = { of: window, at: "top", my: "top", offset: { y: 10 } };
  public filterValue: Array<any> = []
  constructor(private _companyDataService: CompanyDataService) { }

  ngOnInit() {
    this.getCompanyData();
    this.filterValue = [
      ['open', '>=', 10500]
    ];
  }

  public getCompanyData() {
    this._companyDataService.getData().subscribe(result => {
      console.log(result);
      this.companyData = result;
      this.showGrid = true;
    })

  }
}
