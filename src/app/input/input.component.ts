import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  name = '';
  handleInputChange(e: any) {}
  @Output() todoAdd = new EventEmitter<string>();
  onAdd() {
    this.todoAdd.emit(this.name);
    this.name = '';
  }
}
