import { StorageKeys } from './../constants/index';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiEndpoints } from '../constants/';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

@Injectable()
export class ActivityService {

  constructor(private http: Http) { }

  getActivityList(): Observable<any> {
    const activities = this.http
      .get(ApiEndpoints.ACTIVITIES)
      .map((res) => res.json());

    activities.subscribe((data) => {
      localStorage[StorageKeys.ACTIVITY_CACHE] = JSON.stringify(data);
    });

    return activities.startWith(JSON.parse(localStorage[StorageKeys.ACTIVITY_CACHE] || null));
  }
}
