import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ITodo } from 'src/app/interfaces/ITodo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchIcon = faSearch;
  value = '';

  constructor(public todo: TodoService) {}

  onChangeInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
  }

  handleSearch() {
    if (this.value.trim() === '') {
      return;
    }
    this.todo.searchTodo(this.value).subscribe((result) => {
      console.log(result);
    });
  }

  resetInput() {
    this.value = '';
  }
}
