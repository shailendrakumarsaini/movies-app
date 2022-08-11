import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({setParams: { 'apikey':'f030a38e'}});        

    return next
      .handle(request)
      .pipe(
        map((event: HttpEvent<any>) => { return event; }),
        catchError((response) => {        
          if (response instanceof HttpErrorResponse ) {
            console.error('[Api Error Response]=>', response);            
          }
          return throwError(response);
        })
      );
  }


}
