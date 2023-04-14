import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  name = '';

  handleInputChange(e: any) {}
  @Output() todoAdd = new EventEmitter<string>();
  onAdd() {
    this.todoAdd.emit(this.name);
    this.name = '';
  }
}
