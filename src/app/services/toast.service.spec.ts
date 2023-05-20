import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

describe('ToastService', () => {
  let toastService: ToastService;

  let mockAuthService = jasmine.createSpyObj('AuthService', ['getUser'], {
    isAuthenticated: of(true),
  });
  mockAuthService.getUser.and.returnValue(of(true));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    });
    toastService = TestBed.inject(ToastService);
  });

  it('should be create', () => {
    expect(toastService).toBeTruthy();
  });

  it('should call method in mockService', () => {
    toastService.testCallAuthService();
    expect(mockAuthService.getUser).toHaveBeenCalled();
  });

  it('should set message', () => {
    let message = 'Test set message function';
    toastService.setMessage(message);
    expect(toastService.message).toEqual(message);
  });
});
