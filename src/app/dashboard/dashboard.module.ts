import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [ DashboardComponent ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
