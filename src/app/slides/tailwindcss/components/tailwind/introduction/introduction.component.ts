import { Component } from '@angular/core';
import { PrismComponent } from '../../../../../shared/components/prism/prism.component';
import { SlideshowTitleComponent } from '../../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
    selector: 'app-tailwind-intro',
    templateUrl: './introduction.component.html',
    imports: [PrismComponent, SlideshowTitleComponent]
})
export class IntroductionComponent {
  example = `
<div class="text-xl font-extrabold lg:text-9xl hover:animate-bounce">
  <span class="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-900">
    Let's dive in!
  </span>
</div>
`;
}
