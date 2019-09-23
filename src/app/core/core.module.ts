import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpBackend } from '@angular/common/http';
import { JwtInterceptor } from './auth/helpers/jwt-interceptor';
import { ErrorInterceptor } from './auth/helpers/error-interceptor';
import { FakeBackend } from './auth/helpers/fake-backend';
import { AuthInterceptorService } from './auth/helpers/auth-interceptor';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackend, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ]
})
export class CoreModule { }
