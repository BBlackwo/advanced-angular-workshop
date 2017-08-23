import { ActivityService } from './services/activity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityViewComponent } from './activity-view/activity-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
