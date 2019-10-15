import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptorService } from './auth/helpers/auth-interceptor';
import { ErrorInterceptor } from './auth/helpers/error-interceptor';
import { FakeBackend } from './auth/helpers/fake-backend';
import { JwtInterceptor } from './auth/helpers/jwt-interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, LayoutModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackend, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
