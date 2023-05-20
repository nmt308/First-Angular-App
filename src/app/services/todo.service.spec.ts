import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TodoService } from './todo.service';
import { ToastService } from './toast.service';
import { listTodo } from '../../mockData';

describe('TodoService', () => {
  let todoService: TodoService;
  let mockToastService = jasmine.createSpyObj('ToastService', [
    'setMessage',
    'toggleShow',
    'testCallAuthService',
  ]);
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ToastService,
          useValue: mockToastService,
        },
      ],
    });
    todoService = TestBed.inject(TodoService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('should request get all todo', () => {
    todoService.getTodoList().subscribe((data) => {
      expect(data.length).toEqual(4);
      expect();
    });
    const mockReq = testingController.expectOne(
      'http://localhost:3000/listTodo'
    );
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(listTodo));
  });
});
