import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
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
