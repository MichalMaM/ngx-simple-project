import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { projectRoute } from './project.routing';
import { ProjectComponent } from "./project.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([projectRoute])
  ],
  declarations: [ ProjectComponent ],
  exports: [ ProjectComponent ]
})
export class ProjectModule { }
