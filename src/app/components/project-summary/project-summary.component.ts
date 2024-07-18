import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-project-summary',
  template: `<h1>Projelerim</h1>
  <mat-grid-list [cols]="6" rowHeight="400px">
      <mat-grid-tile *ngFor="let tile of tiles">
        <mat-card>
          <img mat-card-image src="{{tile.img}}" alt="Resim">
          <mat-card-header>{{tile.content}}</mat-card-header>
          <mat-card-content>{{tile.description}}</mat-card-content>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
    
  <p class="mb-5">Daha fazla projemi incelemek için <a href="">tıklayınız</a></p>
  `,
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent {
  tiles = [
    { img: '../../../assets/ft1.png', content: 'Kart 1', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellat ipsa inventore in dignissimos nemo' },
    { img: '../../../assets/ft1.png', content: 'Kart 2', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellat ipsa inventore in dignissimos nemo' },
    { img: '../../../assets/ft1.png', content: 'Kart 3', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellat ipsa inventore in dignissimos nemo' },
    { img: '../../../assets/ft1.png', content: 'Kart 4', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellat ipsa inventore in dignissimos nemo' },
    { img: '../../../assets/ft1.png', content: 'Kart 5', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellat ipsa inventore in dignissimos nemo' },
    { img: '../../../assets/ft1.png', content: 'Kart 5', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellat ipsa inventore in dignissimos nemo' }
  ];
}
