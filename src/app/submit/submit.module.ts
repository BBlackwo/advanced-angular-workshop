import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './submit.component';

const ROUTES = [
  {
    path: '',
    component: SubmitComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [SubmitComponent]
})
export class SubmitModule { }
