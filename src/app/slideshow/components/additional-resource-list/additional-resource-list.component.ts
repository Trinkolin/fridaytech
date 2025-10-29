import { Component, Inject, OnInit, inject } from '@angular/core';
import { AdditionalResourcesService } from '../../services/additional-resources.service';
import { Resource } from '../../models/resources';
import { AdditonalResourceItemComponent } from './additional-resource-item/additonal-resource-item.component';
import { SlideshowTitleComponent } from '../slideshow-title/slideshow-title.component';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-additional-resource-list',
    templateUrl: './additional-resource-list.component.html',
    imports: [
        AdditonalResourceItemComponent,
        SlideshowTitleComponent,
        MatListModule,
    ]
})
export class AdditionalResourceListComponent implements OnInit {
  additionalResources: Resource[] = [];

  private additionalResourcesService = inject(AdditionalResourcesService);

  constructor(@Inject('module') private _module: string) {}

  ngOnInit() {
    this.additionalResourcesService
      .getAdditionalResources(this._module)
      .subscribe((additionalResources) => {
        this.additionalResources = additionalResources;
      });
  }
}
