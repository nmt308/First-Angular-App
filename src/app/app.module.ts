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

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    SharedModule,
    TodoModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    ToastService,
    { provide: ToastService, useClass: NewToastService },
    TodoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
