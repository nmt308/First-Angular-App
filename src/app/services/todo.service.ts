import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';
import { ToastService } from './toast.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import {
  Observable,
  catchError,
  delay,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  onAdd = false;

  public listTodo: ITodo[] = [];

  public searchResult: ITodo[] = [];

  constructor(public toast: ToastService, private http: HttpClient) {}

  setOnAdd() {
    this.onAdd = !this.onAdd;
  }

  /* GET DATA FROM SERVER */

  getTodoList() {
    return this.http.get<ITodo[]>('http://localhost:3000/listTodo');
  }

  /*----------------------------------------------------------*/

  /* GET FULL RESPONSE */

  getFullResponse() {
    return this.http.get<ITodo[]>('http://localhost:3000/listTodo', {
      observe: 'response',
    });
  }

  /*----------------------------------------------------------*/

  /* TYPE RESPONSE */
  // responseType?: 'arraybuffer'|'blob'|'json'|'text'

  getTextFile() {
    const options = {
      responseType: 'text' as const,
    };
    return this.http.get('assets/text.txt', options);
  }

  /*----------------------------------------------------------*/

  /* ADD HTTP URL PARAMETERS */

  getWithQuery(name: string, page: number) {
    return this.http.get<ITodo[]>('http://localhost:3000/listTodo', {
      params: {
        name: 'abc',
        page: 2,
      },
    });
  } //URL will be: http://localhost:3000/listTodo?name=abc&page=2

  /*----------------------------------------------------------*/

  /* SENDING DATA TO SERVER */

  addTodo(newTodo: ITodo) {
    this.toast.setMessage('Add new task successful !');
    this.toast.toggleShow();
    return this.http.post<ITodo>('http://localhost:3000/listTodo', newTodo);
  }

  editTodo(data: ITodo) {
    this.toast.setMessage('Edit task successful !');
    this.toast.toggleShow();
    return this.http.put(`http://localhost:3000/listTodo/${data.id}`, data);
  }

  removeTodo(id: number) {
    this.toast.setMessage('Remove task successful !');
    this.toast.toggleShow();
    return this.http.delete(`http://localhost:3000/listTodo/${id}`);
  }

  /*----------------------------------------------------------*/

  /* GET DETAIL ERROR */

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Server error ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Please try again later.'));
  }

  /*----------------------------------------------------------*/

  getSearchTodo() {
    return this.searchResult;
  }

  searchTodo(value: string): Observable<ITodo[]> {
    const params = new HttpParams().set('name', value);
    return this.http
      .get<ITodo[]>('http://localhost:3000/listTodo', { params })
      .pipe(tap((result) => (this.searchResult = result)));
  }

  clearSearchTodo() {
    this.searchResult = [];
    this.toast.setMessage('Clear search success !');
    this.toast.toggleShow();
  }

  detailTodo(id: number) {
    return this.http.get<ITodo>(`http://localhost:3000/listTodo/${id}`);
  }
}
