import {
  Component,
  DoCheck,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { ITodo } from 'src/app/interfaces/ITodo';
import { ToastService } from 'src/app/services/toast.service';
import { TodoService } from 'src/app/services/todo.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements DoCheck {
  title = 'List to do - Week 1';
  listTodo: ITodo[] = [];
  searchResult: ITodo[] = [];

  @ViewChild(SearchComponent) searchRef?: SearchComponent;
  constructor(public toast: ToastService, public todo: TodoService) {}

  ngOnInit() {
    this.listTodo = this.todo.getTodoList();
  }

  ngDoCheck() {
    this.listTodo = this.todo.getTodoList();
    this.searchResult = this.todo.getSearchTodo();
  }

  handleClear() {
    this.todo.clearSearchTodo();
    this.searchRef?.resetInput();
  }
}
