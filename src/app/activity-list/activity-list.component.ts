import { StorageKeys } from './../constants/index';
import { ActivityService } from './../services/activity.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Observable<any>;

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    const activities = this.activityService.getActivityList();

    activities.subscribe((data) => {
      localStorage[StorageKeys.ACTIVITY_CACHE] = JSON.stringify(data);
    });

    this.activities = activities.startWith(JSON.parse(localStorage[StorageKeys.ACTIVITY_CACHE] || null));
  }

}
