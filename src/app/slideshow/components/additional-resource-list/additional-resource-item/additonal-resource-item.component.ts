import { Component, Input } from '@angular/core';
import { Resource } from '../../../models/resources';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-additional-resource-item',
  standalone: true,
  templateUrl: './additional-resource-item.component.html',
  imports: [MatIconModule, MatListModule],
})
export class AdditonalResourceItemComponent {
  @Input() additionalResource!: Resource;
}
