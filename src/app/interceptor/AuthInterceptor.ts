import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getToken();

    //Typescript disallow
    // req.headers = req.headers.set('Authorization', authToken);

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
    });
    console.log(authReq);

    // send cloned request with header to the next handler.
    return next.handle(req);
  }
}
