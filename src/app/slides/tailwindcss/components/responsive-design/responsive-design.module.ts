import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionComponent } from './introduction/introduction.component';
import { MediaQueriesComponent } from './media-queries/media-queries.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'flexbox',
    component: FlexboxComponent,
  },
  {
    path: 'media-queries',
    component: MediaQueriesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ResponsiveDesignModule {}
