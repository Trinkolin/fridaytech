import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,input,
} from '@angular/core';

@Component({
  selector: 'app-prism',
  standalone: true,
  templateUrl: './prism.component.html',
})
export class PrismComponent implements AfterViewInit {
  @ViewChild('codeEle') codeEle!: ElementRef;

  code = input.required<string>();
  language = input.required<string>();

  ngAfterViewInit() {
    //  highlightElement(this.codeEle.nativeElement);
  }
}
