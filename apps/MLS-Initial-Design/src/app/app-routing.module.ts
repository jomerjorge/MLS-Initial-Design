import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrationComponent } from './integration/integration.component';
import { IntegreqComponent } from './integreq/integreq.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'integration', component: IntegrationComponent, data: {title: '/MLS Initial Design/Integration'}},
  { path: 'integrationrequest', component: IntegreqComponent, data: {title: '/MLS Initial Design/Integration Request'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
