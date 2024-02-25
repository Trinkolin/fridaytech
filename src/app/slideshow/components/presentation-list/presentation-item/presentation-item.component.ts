import { Component, Input } from '@angular/core';
import { Resource } from '../../../models/resources';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-presentation-item',
  standalone: true,
  templateUrl: './presentation-item.component.html',
  imports: [MatIconModule, MatListModule],
})
export class PresentationItemComponent {
  @Input() presentation!: Resource;
}
