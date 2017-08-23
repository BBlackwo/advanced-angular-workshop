import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiEndpoints } from '../constants/';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {

  constructor(private http: Http) { }

  getActivityList(): Observable<any> {
    return this.http
      .get(ApiEndpoints.ACTIVITIES)
      .map((res) => res.json());
  }
}
