import { Component, DoCheck, ViewChild } from '@angular/core';
import { ITodo } from 'src/app/interfaces/ITodo';
import { ToastService } from 'src/app/services/toast.service';
import { TodoService } from 'src/app/services/todo.service';
import { SearchComponent } from '../search/search.component';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
})
export class ModalListComponent {
  title = 'List to do - Week 2';
  listTodo: ITodo[] = [];
  searchResult: ITodo[] = [];

  myObservable: Observable<string> = of('Hello!');

  @ViewChild(SearchComponent) searchRef?: SearchComponent;
  constructor(
    public toast: ToastService,
    public todo: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listTodo = this.route.snapshot.data['listTodo'];

    this.todo.getTodoList().subscribe((data) => {
      this.todo.listTodo = data;
      this.listTodo = this.todo.listTodo;
    });
  }

  ngDoCheck() {
    this.listTodo = this.todo.listTodo;
  }

  toggleAdd() {
    this.todo.setOnAdd();
  }

  getText() {
    this.todo.getTextFile().subscribe((data) => {
      console.log(data);
    });
  }

  handleClear() {
    this.todo.clearSearchTodo();
    this.searchRef?.resetInput();
  }
}
