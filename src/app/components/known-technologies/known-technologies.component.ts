import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-known-technologies',
  template: `<div class="technologies">
  <div id="infinite" class="highway-slider">
      <div class="highway-barrier">
          <ul class="highway-lane d-flex">
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
              <app-known-technologies-item></app-known-technologies-item>
          </ul>
      </div>
  </div>
</div> `,
  styleUrls: ['./known-technologies.component.scss']
})
export class KnownTechnologiesComponent {
 
}
