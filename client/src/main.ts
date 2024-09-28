import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import 'bootstrap/dist/css/bootstrap.min.css';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
