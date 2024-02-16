import { Component } from '@angular/core';

@Component({
  selector: 'app-abouth-edit',
  templateUrl: './abouth-edit.component.html',
  styleUrls: ['./abouth-edit.component.css']
})
export class AbouthEditComponent {
  constructor() { }
  selectedFile: File | null = null;
  imageUrl: any = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }
}
