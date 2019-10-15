import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

/*
The fake backend provider enables the example to run without a backend / backendless,
It's implemented using the HttpInterceptor class that was introduced in Angular 4.3 as part of the new
HttpClientModule. By extending the HttpInterceptor class you can create a custom interceptor to modify
http requests before they get sent to the server. In this case the FakeBackendInterceptor intercepts
certain requests based on their URL and provides a fake response instead of going to the server.
*/
@Injectable()
export class FakeBackend implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const users: any[] = [
      {
        id: 1,
        username: 'x',
        password: 'x',
        firstName: 'x',
        lastName: 'x',
      },
    ];

    const authHeader = request.headers.get('Authorization');
    const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
    const roleString = isLoggedIn && authHeader.split('.')[1];

    // wrap in delayed observable to simulate server api call
    return (
      of(null)
        .pipe(
          mergeMap(() => {
            // authenticate - public
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
              const user = users.find(
                x => x.username === request.body.username && x.password === request.body.password
              );
              if (!user) {
                return error('Username or password is incorrect');
              }
              return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: `fake-jwt-token`,
              });
            }

            // authenticate - public
            if (request.url.endsWith('/users') && request.method === 'GET') {
              return ok({ body: users });
            }

            // pass through any requests not handled above
            return next.handle(request);
          })
        )
        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
    );

    // private helper functions

    function ok(body) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorised() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function error(message) {
      return throwError({ status: 400, error: { message } });
    }
  }
}
