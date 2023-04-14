import { Component, DoCheck } from '@angular/core';
import { listTodo, ITodo } from '../listTodo';
import { ClearService } from '../services/clear.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  title = 'List to do - Week 1';
  listTodo = listTodo;
  searchResult: ITodo[] = [];
  isClear = false;
  message = '';

  addTodo(e: string) {
    if (e.trim() === '') {
      this.message = 'Please fill the input !';
      return;
    }
    this.listTodo.push({
      id: Date.now(),
      name: e,
    });
    this.message = 'Add new task successful !';
  }
  removeTodo(e: number) {
    let remainTodo = this.listTodo.filter((todo) => todo.id !== e);
    this.listTodo = remainTodo;
    if (this.searchResult.length > 0) {
      let remainTodo = this.searchResult.filter((todo) => todo.id !== e);
      this.searchResult = remainTodo;
    }
    this.message = `Remove task successful !`;
  }
  searchTodo(e: string) {
    let result = this.listTodo.filter((todo) => todo.name.includes(e));
    if (result.length == 0) {
      this.message = 'No task was founded';
    }
    this.searchResult = result;
  }
  clearSearchTodo() {
    this.searchResult = [];
    this.isClear = !this.isClear;
  }
  editTodo(e: ITodo) {
    let newTodo = this.listTodo.map((todo) => {
      if (todo.id === e.id) {
        todo.name = e.name;
      }
      return todo;
    });
    this.listTodo = newTodo;
  }
}
