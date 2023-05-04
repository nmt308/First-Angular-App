import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss'],
})
export class ModalAddComponent {
  @Input() title = '';
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required, Validators.minLength(5)]),
    status: new FormControl('', [Validators.required]),
    time: new FormGroup({
      start: new FormControl(''),
      end: new FormControl(''),
    }),
    options: new FormArray([new FormControl('')]),
  });

  get options() {
    return this.form.controls.options as FormArray;
  }

  addOption() {
    this.options.push(new FormControl(''));
  }

  constructor(public todo: TodoService) {}

  handleAdd() {
    let todo = {
      id: Date.now(),
      name: this.form.controls.name.value as string,
      detail: this.form.controls.name.value as string,
      status: this.form.controls.status.value as string,
    };
    this.todo.addTodo(todo).subscribe((data) => {
      this.todo.listTodo.push(data);
    });
  }
}
