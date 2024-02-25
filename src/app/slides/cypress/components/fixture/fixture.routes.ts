import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FixturesComponent } from './fixtures/fixtures.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: 'introduction',
    component: FixturesComponent,
  },
  {
    path: 'advantages',
    component: AdvantageComponent,
  },
  {
    path: 'other',
    component: OtherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [{ provide: 'module', useValue: 'cypress' }],
})
export class FixtureRoutes {}
