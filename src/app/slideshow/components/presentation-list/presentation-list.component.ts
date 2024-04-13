import { Component, OnInit, inject } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { Resource } from '../../models/resources';
import { PresentationItemComponent } from './presentation-item/presentation-item.component';
import { MatListModule } from '@angular/material/list';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-presentation-list',
  standalone: true,
  templateUrl: './presentation-list.component.html',
  imports: [PresentationItemComponent, MatListModule, NgForOf],
})
export class PresentationListComponent implements OnInit {
  presentations: Resource[] = [];
  private presentationService =  inject(PresentationService);

  ngOnInit() {
    this.presentationService.getPresentations().subscribe((presentations) => {
      this.presentations = presentations;
    });
  }
}
