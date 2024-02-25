import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { SlideshowComponent } from '../../slideshow/components/slideshow/slideshow.component';
import { TocComponent } from '../../slideshow/components/toc/toc.component';
import { AdditionalResourceListComponent } from '../../slideshow/components/additional-resource-list/additional-resource-list.component';
import { FrameworkCSSComponent } from './components/framework-css/framework-css.component';

const routes: Routes = [
  {
    path: '',
    component: SlideshowComponent,
    children: [
      {
        path: '',
        component: CoverComponent,
      },
      {
        path: 'introduction',
        component: IntroductionComponent,
      },
      {
        path: 'toc',
        component: TocComponent,
      },
      {
        path: 'responsive-design',
        loadChildren: () =>
          import(
            './components/responsive-design/responsive-design.module'
          ).then((m) => m.ResponsiveDesignModule),
      },
      {
        path: 'framework-css',
        component: FrameworkCSSComponent,
      },
      {
        path: 'tailwind',
        loadChildren: () =>
          import('./components/tailwind/tailwind.routes').then(
            (m) => m.TailwindRoutes,
          ),
      },
      {
        path: 'conclusion',
        component: ConclusionComponent,
      },
      {
        path: 'resources',
        component: AdditionalResourceListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [{ provide: 'module', useValue: 'tailwindcss' }],
})
export class TailwindcssModule {}
