import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './auth/helpers/jwt-interceptor';
import { ErrorInterceptor } from './auth/helpers/error-interceptor';
import { FakeBackend } from './auth/helpers/fake-backend';
import { AuthInterceptorService } from './auth/helpers/auth-interceptor';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, LayoutModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackend, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class CoreModule {
      constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only.'
            );
        }
    }
 }
