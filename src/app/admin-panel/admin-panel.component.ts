import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = false;

  status: boolean = false;
  statusLink: boolean = false;
  clickEvent() {
    this.status = !this.status;
    //this.statusLink = !this.statusLink;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }
}
