import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('../app/characters/characters.module').then((m) => m.CharactersModule)
  },
  {
    path: 'characters/:characterId',
    loadChildren: () =>
      import('../app/character-information/character-information.module').then((m) => m.CharacterInformationModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((m) => m.AdminModule)
  },
  { 
    path: 'not-authorization', 
    component: NotAuthorizedComponent
   },
   { 
    path: 'page-not-found', 
    component: PageNotFoundComponent
   },
   { path: '**',
     redirectTo: 'page-not-found' 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
