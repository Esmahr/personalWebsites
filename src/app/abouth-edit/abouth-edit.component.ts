import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import EditorJS, { ToolConstructable } from '@editorjs/editorjs';
import { DescriptionService } from '../services/description.service';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import Quote from '@editorjs/quote';
// @ts-ignore
import Warning from '@editorjs/warning';
// @ts-ignore
import Delimiter from '@editorjs/delimiter';
// @ts-ignore
import ToggleBlock from 'editorjs-toggle-block';
// @ts-ignore
import AIText from '@alkhipce/editorjs-aitext'
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import NestedList from '@editorjs/nested-list';
// @ts-ignore
import Checklist from '@editorjs/checklist'
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";
// @ts-ignore
import AudioPlayer from 'editorjs-audio-player';
// @ts-ignore
import Table from '@editorjs/table';
// @ts-ignore
import CodeTool from '@editorjs/code';
// @ts-ignore
import RawTool from '@editorjs/raw';
// @ts-ignore
import CodeBox from '@bomdi/codebox';
// @ts-ignore
import CodeBox from '@calumk/editorjs-codeflask';
// @ts-ignore
import Marker from '@editorjs/marker';
// @ts-ignore
import InlineCode from '@editorjs/inline-code';
// @ts-ignore
import Underline from '@editorjs/underline';
// @ts-ignore
import Hyperlink from 'editorjs-hyperlink';
// @ts-ignore
import ChangeCase from 'editorjs-change-case';
// @ts-ignore
import ColorPlugin from 'editorjs-text-color-plugin';
// @ts-ignore
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';

@Component({
  selector: 'app-abouth-edit',
  templateUrl: './abouth-edit.component.html',
  styleUrls: ['./abouth-edit.component.css']
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
        header: {
          class: Header as unknown as ToolConstructable,
          inlineToolbar: ['bold', 'italic'],
          config: {
            placeholder: 'Enter a header',
            levels: [2, 3, 4],
            defaultLevel: 3,
            defaultAlignment: 'left'
          },
        },
        quote: Quote,
        warning: Warning,
        delimiter: Delimiter,
        toggle: {
          class: ToggleBlock,
          inlineToolbar: true,
        },
        aiText: {
          // if you do not use TypeScript you need to remove "as unknown as ToolConstructable" construction
          class: AIText as unknown as ToolConstructable,
          config: {
            openaiKey: 'YOUR_OPEN_AI_KEY'
          }
        },
        list1: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        image: SimpleImage,
        audioPlayer: AudioPlayer,
        table: Table,
        code: CodeTool,
        raw: RawTool,
        codeBox: {
          class: CodeBox,
          config: {
            themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
            themeName: 'atom-one-dark', // Optional
            useDefaultTheme: 'light' // Optional. This also determines the background color of the language select drop-down
          }
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        underline: Underline,
        hyperlink: {
          class: Hyperlink,
          config: {
            shortcut: 'CMD+L',
            target: '_blank',
            rel: 'nofollow',
            availableTargets: ['_blank', '_self'],
            availableRels: ['author', 'noreferrer'],
            validate: false,
          }
        },
        changeCase: {
          class: ChangeCase,
          config: {
            showLocaleOption: true, // enable locale case options
            locale: 'tr' // or ['tr', 'TR', 'tr-TR']
          }
        },
        Color: {
          class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
          config: {
             colorCollections: ['#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
             defaultColor: '#FF1300',
             type: 'text', 
             customPicker: true // add a button to allow selecting any colour  
          }     
        },
        Marker: {
          class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
          config: {
             defaultColor: '#FFBF00',
             type: 'marker',
             icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`
            }       
        },
        paragraph: { // apply only for the 'paragraph' tool
          tunes: ['textVariant'],
        },
        anyTuneName: {
          class:AlignmentTuneTool,
          config:{
            default: "right",
            blocks: {
              header: 'center',
              list: 'right'
            }
          },
        }
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
