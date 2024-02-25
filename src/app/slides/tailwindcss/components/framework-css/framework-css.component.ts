import { Component } from '@angular/core';
import { SlideshowTitleComponent } from '../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
  selector: 'app-framework-css',
  standalone: true,
  templateUrl: './framework-css.component.html',
  imports: [SlideshowTitleComponent],
})
export class FrameworkCSSComponent {}
