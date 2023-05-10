import { Component, DoCheck, ViewChild } from '@angular/core';
import { ITodo } from 'src/app/interfaces/ITodo';
import { ToastService } from 'src/app/services/toast.service';
import { TodoService } from 'src/app/services/todo.service';
import { SearchComponent } from '../search/search.component';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
  group,
} from '@angular/animations';
@Component({
  selector: 'app-modal',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],

  animations: [
    trigger('move', [
      state(
        'moved',
        style({
          transform: 'translateX(-150px)',
        })
      ),
      state(
        'notmoved',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('moved => notmoved', animate('0.5s ease')),
      transition('notmoved => moved', animate('0.5s ease')),
      transition('moved <=> notmoved', animate('0.5s ease')),
      transition('moved => *', animate('0.5s ease')),
      transition('* => moved', animate('0.5s ease')),
      transition('* => *', animate('0.5s ease')),
    ]),

    trigger('stagger', [
      transition(':increment', [
        query('.todo-item:enter', [
          style({
            transform: 'translateX(100%)',
            opacity: 0,
          }),
          stagger(100, [
            animate(
              '0.5s ease',
              style({
                transform: 'translateX(0)',
                opacity: 1,
              })
            ),
          ]),
        ]),
      ]),

      transition(':decrement', [
        query('.todo-item:leave', [
          style({
            transform: 'translateX(0)',
            opacity: 1,
          }),
          stagger(100, [
            animate(
              '0.5s ease',
              style({
                transform: 'translateX(100%)',
                opacity: 0,
              })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class ModalListComponent {
  title = 'List to do - Week 4';
  listTodo: ITodo[] = [];
  searchResult: ITodo[] = [];
  lengthTodoList = 0;
  titleType = 'uppercase';

  myObservable: Observable<string> = of('Hello!');

  @ViewChild(SearchComponent) searchRef?: SearchComponent;
  constructor(
    public toast: ToastService,
    public todo: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.listTodo = this.route.snapshot.data['listTodo'];
    this.resetData();
    this.todo.getTodoList().subscribe((data) => {
      this.todo.listTodo = data;
      this.listTodo = this.todo.listTodo;
    });
  }

  ngDoCheck() {
    this.listTodo = this.todo.listTodo;
    this.lengthTodoList = this.listTodo.length;
  }

  toggleAdd() {
    this.todo.setOnAdd();
    console.log(this.todo.onAdd);
  }

  getText() {
    this.todo.getTextFile().subscribe((data) => {
      console.log(data);
    });
  }

  resetData() {
    this.todo.listTodo = [];
  }

  handleClear() {
    this.todo.clearSearchTodo();
    this.searchRef?.resetInput();
  }
}
