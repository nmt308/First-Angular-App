import { Component, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchIcon = faSearch;
  value = '';
  handleInputChange(e: any) {}
  @Output() valueSearch = new EventEmitter<string>();
}
