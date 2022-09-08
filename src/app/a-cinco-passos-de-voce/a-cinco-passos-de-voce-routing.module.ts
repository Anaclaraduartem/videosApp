import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ACincoPassosDeVocePage } from './a-cinco-passos-de-voce.page';

const routes: Routes = [
  {
    path: '',
    component: ACincoPassosDeVocePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ACincoPassosDeVocePageRoutingModule {}
