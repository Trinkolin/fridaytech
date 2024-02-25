import { Component } from '@angular/core';
import { SlideshowTitleComponent } from '../../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
  selector: 'app-flexbox',
  standalone: true,
  templateUrl: './flexbox.component.html',
  imports: [SlideshowTitleComponent],
})
export class FlexboxComponent {}
