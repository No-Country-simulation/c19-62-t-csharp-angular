import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_REDUCERS, APP_EFFECTS } from './core/store/app.state';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      APP_ROUTES,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    provideClientHydration(),
    provideStore(ROOT_REDUCERS),
    provideEffects(APP_EFFECTS),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
