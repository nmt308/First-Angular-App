import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  PreloadAllModules,
  Route,
  Router,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  UrlSegment,
} from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { ModalContainerComponent } from './todo/modal-container/modal-container.component';
import { AuthModalComponent } from './auth/auth-modal/auth-modal.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChildComponent } from './profile-child/profile-child.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoService } from './services/todo.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'prefix', title: 'Home page' },
  {
    path: 'login',
    component: AuthModalComponent,
    title: 'Login page',
  },

  {
    path: 'detail/:id',
    component: TodoDetailComponent,
    title: 'Detail todo',
    canActivate: [
      (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const auth = inject(AuthService);
        return auth.isLogin;
      },
    ],
  },

  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile page',
    canDeactivate: [
      (
        component: ProfileComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
      ) => {
        const result = window.confirm('Leave this page ?');
        return result;
      },
    ],

    canActivateChild: [
      (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const auth = inject(AuthService);
        return auth.isLogin;
      },
    ],

    children: [
      {
        path: 'profile-child',
        component: ProfileChildComponent,
        title: 'Child profile page',
      },
    ],
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard page',
    canMatch: [
      (route: Route, segments: UrlSegment[]) => {
        const role = inject(AuthService);
        const router = inject(Router);
        if (role.isAdmin) {
          return true;
        }
        return router.createUrlTree(['/login']);
      },
    ],
  },

  {
    path: 'home',
    component: ModalContainerComponent,
    title: 'Home page',
    resolve: {
      listTodo: () => {
        const todoService = inject(TodoService);
        return todoService.getTodoList();
      },
    },
  },

  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },

  { path: '**', component: Page404Component, title: 'Page 404 Not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
