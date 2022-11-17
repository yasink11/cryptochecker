import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from 'src/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = BaseUrl.apiUrl


  constructor(private http: HttpClient) { }

  getCurrencyData(currency:string){
    return this.http.get<any>(`${this.apiUrl}/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }

  getTrendingCurrency(currency:string){
    return this.http.get<any>(`${this.apiUrl}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }

  getGrpahicalCurrencyData(coinId:string, currency:string, days: number){
    return this.http.get<any>(`${this.apiUrl}/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  }

  getCurrencyById(coinId:string){
    return this.http.get<any>(`${this.apiUrl}/${coinId}`)
  }



}
