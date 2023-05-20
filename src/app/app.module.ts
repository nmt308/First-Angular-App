import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastService } from './services/toast.service';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './services/todo.service';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page404/page404.component';
import { NewToastService } from './services/new-toast.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChildComponent } from './profile-child/profile-child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptors } from './interceptor/interceptor';
import { AboutModule } from './about/about.module';
import { FeatureModule } from './feature/feature.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransformTextDirective } from './customDirectives/transform-text.directive';
import { HideDirective } from './customDirectives/hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    ProfileComponent,
    ProfileChildComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TodoModule,
    AuthModule,
    AppRoutingModule,
    AboutModule,
    FeatureModule,
  ],
  providers: [
    // { provide: ToastService, useClass: NewToastService },
    ToastService,
    TodoService,
    httpInterceptors,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
