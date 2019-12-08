import { Injectable } from '@angular/core';
import { HomeInterface } from '../../interfaces/home-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private _httpClient: HttpClient) { }
  
  // get all security data
  getData(): Observable<HomeInterface.ICompanyData[]> {
    return this._httpClient.get<HomeInterface.ICompanyData[]>('../../../../../assets/stubs/company_data.json');  
  }

}
