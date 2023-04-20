import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { ModalContainerComponent } from './todo/modal-container/modal-container.component';
import { AuthModalComponent } from './auth/auth-modal/auth-modal.component';
import { FeatureComponent } from './feature/feature.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: AuthModalComponent },
  { path: 'home', component: ModalContainerComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'feature',
    component: FeatureComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
