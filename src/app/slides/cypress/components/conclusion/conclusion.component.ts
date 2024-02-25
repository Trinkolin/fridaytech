import { Component } from '@angular/core';
import { SlideshowTitleComponent } from '../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
  selector: 'app-conclusion',
  standalone: true,
  templateUrl: './conclusion.component.html',
  imports: [SlideshowTitleComponent],
})
export class ConclusionComponent {}
