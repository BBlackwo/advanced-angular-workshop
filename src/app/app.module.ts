import { ActivityService } from './services/activity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityViewComponent } from './activity-view/activity-view.component';

const ROUTES = [
  {
    path: '',
    component: ActivityListComponent,
    data: { title: 'Things To Do'}
  },
  {
    path: 'activities/:title',
    component: ActivityViewComponent
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
    data: { title: 'About This App'}
  },
  {
    path: 'submit',
    loadChildren: './submit/submit.module#SubmitModule',
    data: { title: 'Submit Activity'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
