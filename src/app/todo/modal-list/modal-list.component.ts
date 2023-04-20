import { Component, DoCheck, ViewChild } from '@angular/core';
import { ITodo } from 'src/app/interfaces/ITodo';
import { ToastService } from 'src/app/services/toast.service';
import { TodoService } from 'src/app/services/todo.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
})
export class ModalListComponent implements DoCheck {
  title = 'List to do - Week 1';
  listTodo: ITodo[] = [];
  searchResult: ITodo[] = [];

  @ViewChild(SearchComponent) searchRef?: SearchComponent;
  constructor(public toast: ToastService, public todo: TodoService) {}

  ngOnInit() {
    this.listTodo = this.todo.getTodoList();
    this.toast.logToast();
  }

  ngDoCheck() {
    this.listTodo = this.todo.getTodoList(); //????
    this.searchResult = this.todo.getSearchTodo(); //????
  }

  toggleAdd() {
    this.todo.setOnAdd();
  }

  handleClear() {
    this.todo.clearSearchTodo();
    this.searchRef?.resetInput();
  }
}
