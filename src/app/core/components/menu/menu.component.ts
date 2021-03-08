
import { Component, OnInit } from '@angular/core';
import {SidebarModule} from 'ng-sidebar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

}
