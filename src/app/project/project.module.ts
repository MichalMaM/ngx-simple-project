import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { projectRoute } from './project.routing';
import { ProjectComponent } from "./project.component";

@NgModule({
  imports: [
    RouterModule.forChild([projectRoute])
  ],
  declarations: [ ProjectComponent ],
  exports: [ ProjectComponent ]
})
export class ProjectModule { }
