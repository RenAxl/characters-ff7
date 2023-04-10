import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () =>
          import('../admin/categories/categories.module').then((m) => m.CategoriesModule)
      },
      {
        path: 'characters',
        loadChildren: () =>
          import('../admin/characters/characters.module').then((m) => m.CharactersModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../admin/users/users.module').then((m) => m.UsersModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
