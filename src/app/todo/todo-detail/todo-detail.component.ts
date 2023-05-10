import { transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from 'src/app/interfaces/ITodo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent {
  id: number = 0;
  name: number = 0;
  data?: ITodo;

  constructor(private route: ActivatedRoute, private todo: TodoService) {}

  ngOnInit() {
    //GET PARAMS FROM ROUTE
    const idParam = this.route.snapshot.paramMap.get('id');

    // this.route.params.subscribe((params) => {
    //   this.id = params['id'];
    // });

    //GET QUERY FROM ROUTE
    const nameQuery = this.route.snapshot.queryParamMap.get('name');

    // this.route.queryParams.subscribe((queries) => {
    //   this.name = queries['name'];
    // });

    console.log(`Param is: ${idParam} ` + 'and' + ` query is: ${nameQuery}`);

    this.todo.detailTodo(parseInt(idParam ?? '')).subscribe((data) => {
      this.data = data;
    });
  }
}
