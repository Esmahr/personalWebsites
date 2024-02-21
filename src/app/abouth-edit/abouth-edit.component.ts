import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import { DescriptionService } from '../services/description.service';

@Component({
  selector: 'app-abouth-edit',
  templateUrl: './abouth-edit.component.html',
  styleUrls: ['./abouth-edit.component.scss']
})
export class AbouthEditComponent implements AfterViewInit {
  @ViewChild('editor', { static: true }) editorElement!: ElementRef;

  private editor: EditorJS | undefined;

  constructor(private descriptionService: DescriptionService) { }
  selectedFile: File | null = null;
  imageUrl: any = null;

  ngAfterViewInit(): void {
    this.initializeEditor();
  }
  private initializeEditor(): void {
    this.editor = new EditorJS({
      minHeight: 200,
      holder: this.editorElement.nativeElement,
      tools: {
      }
    });

  }

  showEditorData(): void {
    this.editor?.save().then(data => {
      console.dir(data);
      this.descriptionService.postData(data); // Verileri servise gönder
    });
  }

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
