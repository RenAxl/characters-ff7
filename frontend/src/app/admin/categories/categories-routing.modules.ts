import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ANALYST', 'ROLE_ADMIN']}
  },
  {
    path: 'create',
    component: CategoryFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ANALYST', 'ROLE_ADMIN']}
  },
  {
    path: ':categoryId',
    component: CategoryFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ANALYST', 'ROLE_ADMIN']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
