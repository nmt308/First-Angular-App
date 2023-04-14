import {
  Component,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnChanges {
  searchIcon = faSearch;
  value = '';
  @Input() isClear = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.value = '';
  }
  handleInputChange(e: any) {}
  @Output() valueSearch = new EventEmitter<string>();
  handleSearch() {
    this.valueSearch.emit(this.value);
  }
}
