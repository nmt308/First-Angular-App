import { LoggingInterceptor } from './LoggingInterceptor';
import { AuthInterceptor } from './AuthInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
];
