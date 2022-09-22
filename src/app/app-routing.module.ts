import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'a-cinco-passos-de-voce',
    loadChildren: () => import('./a-cinco-passos-de-voce/a-cinco-passos-de-voce.module').then( m => m.ACincoPassosDeVocePageModule)
  },  {
    path: 'continencia-ao-amor',
    loadChildren: () => import('./continencia-ao-amor/continencia-ao-amor.module').then( m => m.ContinenciaAoAmorPageModule)
  },
  {
    path: 'como-eu-era-antes-de-voce',
    loadChildren: () => import('./como-eu-era-antes-de-voce/como-eu-era-antes-de-voce.module').then( m => m.ComoEuEraAntesDeVocePageModule)
  },
  {
    path: 'a-culpa-e-das-estrelas',
    loadChildren: () => import('./a-culpa-e-das-estrelas/a-culpa-e-das-estrelas.module').then( m => m.ACulpaEDasEstrelasPageModule)
  },
  {
    path: 'por-lugares-incriveis',
    loadChildren: () => import('./por-lugares-incriveis/por-lugares-incriveis.module').then( m => m.PorLugaresIncriveisPageModule)
  },
  {
    path: 'simplesmente-acontece',
    loadChildren: () => import('./simplesmente-acontece/simplesmente-acontece.module').then( m => m.SimplesmenteAcontecePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
