import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  onAdd = false;

  public listTodo: ITodo[] = [
    {
      id: 0,
      name: 'Overview of Angular',
    },
    {
      id: 1,
      name: 'Setting up environment',
    },
    {
      id: 2,
      name: 'Create new project',
    },
    {
      id: 3,
      name: 'Building basic Angular application',
    },
  ];

  public searchResult: ITodo[] = [];

  constructor(public toast: ToastService) {}

  setOnAdd() {
    this.onAdd = !this.onAdd;
  }

  getTodoList() {
    return this.listTodo;
  }

  getSearchTodo() {
    return this.searchResult;
  }

  addTodo(newTodo: ITodo) {
    this.listTodo.push(newTodo);
    this.toast.setMessage('Add new task successful !');
    this.toast.toggleShow();
  }

  removeTodo(id: number) {
    let remainTodo = this.listTodo.filter((todo) => todo.id !== id);
    this.listTodo = remainTodo;
    if (this.searchResult.length > 0) {
      let remainTodo = this.searchResult.filter((todo) => todo.id !== id);
      this.searchResult = remainTodo;
    }
    this.toast.setMessage('Remove task successful !');
    this.toast.toggleShow();
  }

  searchTodo(value: string) {
    let result = this.listTodo.filter((todo) => todo.name.includes(value));
    if (result.length == 0) {
      this.toast.setMessage('No task was founded !');
      this.toast.toggleShow();
    }
    this.searchResult = result;
  }

  clearSearchTodo() {
    this.searchResult = [];
    this.toast.setMessage('Clear search success !');
    this.toast.toggleShow();
  }

  editTodo(data: ITodo) {
    let newTodo = this.listTodo.map((todo) => {
      if (todo.id === data.id) {
        todo.name = data.name;
      }
      return todo;
    });
    this.listTodo = newTodo;
    this.toast.setMessage('Edit task successful !');
    this.toast.toggleShow();
  }
}
