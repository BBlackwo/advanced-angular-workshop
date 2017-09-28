import { StorageKeys } from './../constants/index';
import { ActivityService } from './../services/activity.service';
import { ActivatedRoute } from '@angular/router/';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.css']
})
export class ActivityViewComponent implements OnInit {

  activities: Observable<any[]>;
  activity: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService
  ) {
    this.activities = this.activityService.getActivityList();

    this.activity = this.route.params.switchMap((params) =>
      this.activities.map((list) => list.find((item) =>
        item.title === params['title'])));
   }

  ngOnInit() {
  }

}
