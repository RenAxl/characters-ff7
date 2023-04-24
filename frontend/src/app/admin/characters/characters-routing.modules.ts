import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterFormComponent } from './character-form/character-form.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    component: CharacterListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ANALYST', 'ROLE_ADMIN']}
  },
  {
    path: 'create',
    component: CharacterFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ANALYST', 'ROLE_ADMIN']}
  },
  {
    path: ':characterId',
    component: CharacterFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ANALYST', 'ROLE_ADMIN']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
