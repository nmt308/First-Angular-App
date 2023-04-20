import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnChanges {
  searchIcon = faSearch;
  value = '';

  constructor(public todo: TodoService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngDoCheck(): void {
    console.log('do check in Search');
  }

  ngAfterViewChecked(): void {
    console.log('view checked in Search');
  }

  onChangeInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
  }

  handleSearch() {
    if (this.value.trim() === '') {
      return;
    }
    this.todo.searchTodo(this.value);
  }

  resetInput() {
    this.value = '';
  }
}
