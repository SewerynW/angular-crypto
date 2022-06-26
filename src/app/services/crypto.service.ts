import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price'
const BASE_MARKET_URL = 'https://api.coingecko.com/api/v3/coins/markets?'
const DEFAULT_CURRENCY = 'usd'

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getSimpleValue$(name: string): Observable<any> {
    return this.http.get(`${API_URL}?ids=${name}&vs_currencies=pln`) as Observable<any>
  }

  getCurrency$(perPage = 100, pageNumber = 1): Observable<any> {
    return this.http.get(
      `${BASE_MARKET_URL}vs_currency=${DEFAULT_CURRENCY}&order=market_cap_desc&sparkline=false&per_page=${perPage}&page=${pageNumber}`
    )
  }
}

