import { NgModule } from '@angular/core';

import { IntroductionComponent } from './introduction/introduction.component';
import { InstallationComponent } from './installation/installation.component';
import { JitComponent } from './jit/jit.component';
import { CustomizationComponent } from './customization/customization.component';
import { DemonstrationComponent } from './demonstration/demonstration.component';
import { IntegrationMaterialComponent } from './integration-material/integration-material.component';
import { InstallationEndComponent } from './installation-end/installation-end.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'utilisation',
    component: DemonstrationComponent,
  },
  {
    path: 'installation',
    component: InstallationComponent,
  },
  {
    path: 'jit',
    component: JitComponent,
  },
  {
    path: 'installation-end',
    component: InstallationEndComponent,
  },
  {
    path: 'customization',
    component: CustomizationComponent,
  },
  {
    path: 'integration-material',
    component: IntegrationMaterialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [{ provide: 'module', useValue: 'tailwindcss' }],
})
export class TailwindRoutes {}
