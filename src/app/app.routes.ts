import { Routes } from '@angular/router';
import { PresentationListComponent } from './slideshow/components/presentation-list/presentation-list.component';

export const routes: Routes = [
  { path: '', component: PresentationListComponent },
  {
    path: 'tailwindcss',
    loadChildren: () =>
      import('./slides/tailwindcss/tailwindcss.module').then(
        (m) => m.TailwindcssModule,
      ),
  },
  {
    path: 'cypress',
    loadChildren: () =>
      import('./slides/cypress/cypress.module').then((m) => m.CypressModule),
  },
  { path: '**', redirectTo: '' },
];
