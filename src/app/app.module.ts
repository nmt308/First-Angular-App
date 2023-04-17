import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastService } from './services/toast.service';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, TodoModule],
  providers: [ToastService, TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
