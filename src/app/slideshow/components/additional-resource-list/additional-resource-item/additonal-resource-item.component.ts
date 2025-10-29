import { Component, input} from '@angular/core';
import { Resource } from '../../../models/resources';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-additional-resource-item',
    templateUrl: './additional-resource-item.component.html',
    imports: [MatIconModule, MatListModule]
})
export class AdditonalResourceItemComponent {
  additionalResource = input.required<Resource>();
}
