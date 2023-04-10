import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterFormComponent } from './character-form/character-form.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CharacterListComponent,
  },
  {
    path: 'create',
    component: CharacterFormComponent,
  },
  {
    path: ':characterId',
    component: CharacterFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
