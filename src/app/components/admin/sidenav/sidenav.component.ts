import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = false;

  status: boolean = false;
  statusLink: boolean = false;
  clickEvent() {
    this.status = !this.status;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }
}
