import { Component, Inject, OnInit } from '@angular/core';
import { AdditionalResourcesService } from '../../services/additional-resources.service';
import { Resource } from '../../models/resources';
import { AdditonalResourceItemComponent } from './additional-resource-item/additonal-resource-item.component';
import { SlideshowTitleComponent } from '../slideshow-title/slideshow-title.component';
import { MatListModule } from '@angular/material/list';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-additional-resource-list',
  standalone: true,
  templateUrl: './additional-resource-list.component.html',
  imports: [
    AdditonalResourceItemComponent,
    SlideshowTitleComponent,
    MatListModule,
    NgForOf,
  ],
})
export class AdditionalResourceListComponent implements OnInit {
  additionalResources: Resource[] = [];

  constructor(
    protected additionalResourcesService: AdditionalResourcesService,
    @Inject('module') private _module: string,
  ) {}

  ngOnInit() {
    this.additionalResourcesService
      .getAdditionalResources(this._module)
      .subscribe((additionalResources) => {
        this.additionalResources = additionalResources;
      });
  }
}
