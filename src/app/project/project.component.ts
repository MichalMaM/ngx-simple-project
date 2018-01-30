import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit {
  isWidget: boolean;


  ngOnInit() {
    this.isWidget = location.pathname.includes(`widget/`);
  }
}
