import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import { DescriptionService } from '../services/description.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements AfterViewInit {
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
