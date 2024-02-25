import { Component } from '@angular/core';
import { SlideshowTitleComponent } from '../../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  templateUrl: './introduction.component.html',
  imports: [SlideshowTitleComponent],
})
export class IntroductionComponent {}
