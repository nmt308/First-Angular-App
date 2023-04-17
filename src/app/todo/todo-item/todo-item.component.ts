import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    OnChanges,
    AfterViewChecked,
    AfterViewInit,
    AfterContentChecked,
    AfterContentInit
{
  removeIcon = faTrash;
  editIcon = faPen;
  checkIcon = faCheck;
  onEdit = false;
  @Input() id = 0;
  @Input() name = '';

  handleEdit() {
    this.todo.editTodo({ id: this.id, name: this.name });
    this.onEdit = !this.onEdit;
  }

  handleRemove() {
    this.todo.removeTodo(this.id);
  }

  constructor(public todo: TodoService) {}

  ngOnInit(): void {
    console.log('init', this.name);
  }

  ngOnChanges() {
    console.log('on change');
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  ngAfterViewInit(): void {
    console.log('view init');
  }

  ngAfterViewChecked(): void {
    console.log('view checked');
  }

  ngAfterContentInit(): void {
    console.log('content init');
  }

  ngAfterContentChecked(): void {
    console.log('content checked');
  }
}
