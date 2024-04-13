import { Component, Inject, OnInit, inject } from '@angular/core';
import { Slide } from '../../models/slide';
import { Router, RouterOutlet } from '@angular/router';
import { TableOfContentsService } from '../../services/table-of-contents.service';
import { CurrentIndexService } from '../../services/current-index.service';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  templateUrl: './slideshow.component.html',
  imports: [RouterOutlet, MatButtonModule, MatProgressBarModule],
})
export class SlideshowComponent implements OnInit {
  slides: Slide[] = [];

  _percentage: number;

  private tocService = inject(TableOfContentsService);
  private currentIndexService = inject(CurrentIndexService);

  constructor(
    protected router: Router,
    @Inject('module') private _module: string
  ) {
    this.currentIndexService.zero();

    this._percentage = 0;
  }

  get percentage(): number {
    return this._percentage;
  }

  private updatePercentage() {
    this._percentage =
      (this.currentIndexService.get() / (this.slides.length - 1)) * 100;
  }

  ngOnInit() {
    this.tocService.getSlides(this._module).subscribe((slides) => {
      this.slides = slides;
    });
  }

  goHome() {
    this.router.navigateByUrl('');
  }

  private navigateByUrl() {
    this.router.navigateByUrl(this.slides[this.currentIndexService.get()].path);
  }

  goToCover() {
    this.currentIndexService.zero();
    this.navigateByUrl();
    this.updatePercentage();
  }

  nextSlide() {
    if (this.currentIndexService.get() < this.slides.length - 1) {
      this.currentIndexService.next();
      this.navigateByUrl();
      this.updatePercentage();
    }
  }

  prevSlide() {
    if (this.currentIndexService.get() > 0) {
      this.currentIndexService.previous();
      this.navigateByUrl();
      this.updatePercentage();
    }
  }
}
