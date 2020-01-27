import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-workspace-name-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'one';

  constructor() { }

  ngOnInit() {
  }

}
