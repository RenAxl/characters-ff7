import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoryFormComponent } from './admin/categories/category-form/category-form.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { CharacterFormComponent } from './admin/characters/character-form/character-form.component';
import { CharacterListComponent } from './admin/characters/character-list/character-list.component';
import { UserFormComponent } from './admin/users/user-form/user-form.component';
import { UserListComponent } from './admin/users/user-list/user-list.component';
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './auth/login/login-form/login-form.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterInformationComponent } from './character-information/character-information.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/categories/list',
    component: CategoryListComponent,
  },
  {
    path: 'admin/categories/form',
    component: CategoryFormComponent,
  },
  {
    path: 'admin/characters/list',
    component: CharacterListComponent,
  },
  {
    path: 'admin/characters/form',
    component: CharacterFormComponent,
  },
  {
    path: 'admin',
    redirectTo: 'admin/characters/list',
    pathMatch: 'full'
  },
  {
    path: 'admin/users/list',
    component: UserListComponent,
  },
  {
    path: 'admin/users/form',
    component: UserFormComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'auth/login',
    component: LoginFormComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:characterId',
    component: CharacterInformationComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
