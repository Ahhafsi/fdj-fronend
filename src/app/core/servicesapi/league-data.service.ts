import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from '@core/models';
import { Observable } from 'rxjs';
const BASE_PATH = '/';

@Injectable({ providedIn: 'root' })
export class LeagueDataService {
  constructor(private httpClient: HttpClient) {}

  find(criteria?: string, order?: string): Observable<League[]> {
    let params = new HttpParams();
    if (criteria) {
      params = params.append('criteria', criteria.toString());
    }
    if (order) {
      params = params.append('order', order.toString());
    }
    return this.httpClient.get<League[]>(`${BASE_PATH}/leagues/`, {
      params: params,
    });
  }
}
