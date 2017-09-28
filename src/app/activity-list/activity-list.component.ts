import { StorageKeys } from './../constants/index';
import { ActivityService } from './../services/activity.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

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
    this.activities = this.activityService.getActivityList();
  }

}
