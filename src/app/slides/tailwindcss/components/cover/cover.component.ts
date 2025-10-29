import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-cover',
    templateUrl: './cover.component.html',
    imports: [NgOptimizedImage]
})
export class CoverComponent implements OnInit {
  title: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
  }
}
