import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DistanceService {

  baseUrl = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  getDistance(source, destination): Observable<any> {
    return this.http.get(this.baseUrl + 'distance?source=' + source + '&destination=' + destination);
  }

  getPopularSearch(): Observable<any> {
    return this.http.get(this.baseUrl + 'distance/popularsearch');
  }

  getPopularSearchList(): Observable<any> {
    return this.http.get(this.baseUrl + 'distance/popularsearchlist');
  }
}
