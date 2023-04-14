import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ModalComponent } from './modal/modal.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';
import { ToastComponent } from './toast/toast.component';
import { ClearService } from './services/clear.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ModalComponent,
    AddComponent,
    SearchComponent,
    ToastComponent,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [ClearService],
  bootstrap: [AppComponent],
})
export class AppModule {}
