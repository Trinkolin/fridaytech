import { Component } from '@angular/core';
import { PrismComponent } from '../../../../../shared/components/prism/prism.component';
import { SlideshowTitleComponent } from '../../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
  selector: 'app-tailwind-jit',
  standalone: true,
  templateUrl: './jit.component.html',
  imports: [PrismComponent, SlideshowTitleComponent],
})
export class JitComponent {
  example_html = `
<div class="w-full bg-[#8e07e7] text-center text-3xl text-[#d9d1dd] lg:text-5xl">Exemple</div>
`;

  example_css = `
.jit {
  @apply w-full bg-[#8e07e7] text-center text-3xl text-[#d9d1dd] lg:text-5xl
}
`;
}
