import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ACulpaEDasEstrelasPage } from './a-culpa-e-das-estrelas.page';

const routes: Routes = [
  {
    path: '',
    component: ACulpaEDasEstrelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ACulpaEDasEstrelasPageRoutingModule {}
