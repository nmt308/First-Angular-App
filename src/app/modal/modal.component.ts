import { Component } from '@angular/core';
import { listTodo, ITodo } from '../listTodo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  title = 'List to do - Week 1';
  listTodo = listTodo;
  searchResult: ITodo[] = [];
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
    console.log('false');
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
  }
  editTodo(e: ITodo) {
    console.log(e);
    let newTodo = this.listTodo.map((todo) => {
      if (todo.id === e.id) {
        todo.name = e.name;
      }
      return todo;
    });
    this.listTodo = newTodo;
  }
}
