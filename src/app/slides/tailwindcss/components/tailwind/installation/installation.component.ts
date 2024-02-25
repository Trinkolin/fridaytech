import { Component } from '@angular/core';
import { PrismComponent } from '../../../../../shared/components/prism/prism.component';
import { SlideshowTitleComponent } from '../../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
  selector: 'app-tailwind-installation',
  standalone: true,
  templateUrl: './installation.component.html',
  imports: [PrismComponent, SlideshowTitleComponent],
})
export class InstallationComponent {
  step_1 = `
npm install -D tailwindcss
`;
  step_2 = `
npx tailwindcss init
`;
}
