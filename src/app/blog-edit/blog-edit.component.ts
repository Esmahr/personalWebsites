import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import { DescriptionService } from '../services/description.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})

export class BlogEditComponent implements AfterViewInit {
  @ViewChild('editor', { static: true }) editorElement!: ElementRef;

  private editor: EditorJS | undefined;

  constructor(private descriptionService: DescriptionService) { }

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
      this.descriptionService.postData(data);
    });
  }

}
