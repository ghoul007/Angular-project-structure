import { APP_INITIALIZER, NgModule } from '@angular/core';
// functions should always return a function. The initialization process will wait for this to finish before
// it continues.
export function init_app() {
  return () => true;
}

export function get_settings() {
  return () => {};
}

@NgModule({
  providers: [
    // Use the “multi: true” option for multiple injection tokens, to restrict to one, use “multi: false”
    // We use "true", since we have multiple providers using the APP_INITIALIZER token, hence multiple tokens.
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: get_settings,
      deps: [],
      multi: true,
    },
  ],
})

// we can use this module to get information from a server, before loading up the app, like the environment etc.
export class AppInitializationModule {}
