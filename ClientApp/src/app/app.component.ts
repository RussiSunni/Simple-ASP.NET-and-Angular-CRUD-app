import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'HR Administration System';
  opened = false;

  @ViewChild('sideNav', { static: false })
  sideNav: MatSidenav;

  openSidebar() {

    if(this.opened) {
      this.sideNav.close();
      this.opened = false;
    } else {
      this.sideNav.open();
      this.opened = true;
    }
  }
}
