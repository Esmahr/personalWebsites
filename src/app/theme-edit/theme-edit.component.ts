import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent {
  list = [0, 1, 2];
  items = [0, 1, 2, 3, 4];

  getDynamicId(i: number): string {
    return `myInput${i}`;
  }
}
