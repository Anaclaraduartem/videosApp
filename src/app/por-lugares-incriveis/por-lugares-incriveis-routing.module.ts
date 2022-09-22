import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorLugaresIncriveisPage } from './por-lugares-incriveis.page';

const routes: Routes = [
  {
    path: '',
    component: PorLugaresIncriveisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorLugaresIncriveisPageRoutingModule {}
