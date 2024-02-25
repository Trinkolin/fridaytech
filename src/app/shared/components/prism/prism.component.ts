import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-prism',
  standalone: true,
  templateUrl: './prism.component.html',
})
export class PrismComponent implements AfterViewInit {
  @ViewChild('codeEle') codeEle!: ElementRef;

  @Input() code?: string;
  @Input() language?: string;

  ngAfterViewInit() {
    //  highlightElement(this.codeEle.nativeElement);
  }
}
