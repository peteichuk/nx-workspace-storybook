import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-name-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public title = 'text';
  public items = [1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
