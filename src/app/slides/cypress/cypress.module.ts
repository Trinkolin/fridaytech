import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { SlideshowComponent } from '../../slideshow/components/slideshow/slideshow.component';
import { TocComponent } from '../../slideshow/components/toc/toc.component';
import { AdditionalResourceListComponent } from '../../slideshow/components/additional-resource-list/additional-resource-list.component';
import { InstallationComponent } from './components/installation/installation.component';
import { FundamentalsComponent } from './components/fundamentals/fundamentals.component';
import { FixturesComponent } from './components/fixture/fixtures/fixtures.component';

const cypressRoutes: Routes = [
  {
    path: '',
    component: SlideshowComponent,
    children: [
      {
        path: '',
        component: CoverComponent,
      },
      {
        path: 'installation',
        component: InstallationComponent,
      },
      {
        path: 'fundamentals',
        component: FundamentalsComponent,
      },
      {
        path: 'toc',
        component: TocComponent,
      },
      {
        path: 'fixtures',
        loadChildren: () =>
          import('./components/fixture/fixture.routes').then(
            (m) => m.FixtureRoutes,
          ),
      },
      {
        path: 'cypress',
        component: TocComponent,
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
  imports: [RouterModule.forChild(cypressRoutes)],
  providers: [{ provide: 'module', useValue: 'cypress' }],
})
export class CypressModule {}
