import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const MyProabaPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e1f4fd',
      100: '#bce5f9',
      200: '#91d5f5',
      300: '#65c5f1',
      400: '#4db9f1', // Sua cor exata
      500: '#4db9f1',
      600: '#45a7d9',
      700: '#3682a9',
      800: '#275e7a',
      900: '#183a4b',
      950: '#0c1d26'
    },
    components: {
      root: {
        paddingX: '0.5rem',
        paddingY: '0.4rem'
      }

    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: MyProabaPreset,
        options: {
          scale: 0.9,
          darkModeSelector: '.my-app-dark'
        }
      }
    }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
