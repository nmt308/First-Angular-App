import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddComponent,
    ModalComponent,
    SearchComponent,
    TodoItemComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [AddComponent, ModalComponent, SearchComponent, TodoItemComponent],
})
export class TodoModule {}
