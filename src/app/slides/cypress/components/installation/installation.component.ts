import { Component } from '@angular/core';
import { PrismComponent } from '../../../../shared/components/prism/prism.component';
import { SlideshowTitleComponent } from '../../../../slideshow/components/slideshow-title/slideshow-title.component';

@Component({
    selector: 'app-installation',
    templateUrl: './installation.component.html',
    imports: [PrismComponent, SlideshowTitleComponent]
})
export class InstallationComponent {
  install_command = 'npm install cypress --save-dev';

  open_command = 'npx cypress open';

  run_command = 'npx cypress run';
}
