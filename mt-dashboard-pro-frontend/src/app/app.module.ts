import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { MachineTendingComponent } from './components/Machine-Tending/Machine-Tending.component';
import { MyPg1Component } from './components/my-pg1/my-pg1.component';
import { MySk1Component } from './components/my-sk1/my-sk1.component';
import { MyBar1Component } from './components/my-bar1/my-bar1.component';
import { MyOs1Component } from './components/my-os1/my-os1.component';

import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import { PATH } from '../generated/contribution-constants';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const httpLoaderFactory = (http: HttpBackend) =>
    new MultiTranslateHttpLoader(http, [
      { prefix: PATH + '/assets/i18n/', suffix: '.json' },
      { prefix: './ui/assets/i18n/', suffix: '.json' },
    ]);

@NgModule({

  declarations: [
      MachineTendingComponent,
      MyPg1Component,
      MySk1Component,
      MyBar1Component,
      MyOs1Component
],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      UIAngularComponentsModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useFactory: httpLoaderFactory, deps: [HttpBackend] },
        useDefaultLang: false,
      })
    ],
    providers: [],
})

export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const machinetendingComponent = createCustomElement(MachineTendingComponent, {injector: this.injector});
    customElements.define('universal-robots-mt-dashboard-pro-machine-tending', machinetendingComponent);
    const mypg1Component = createCustomElement(MyPg1Component, {injector: this.injector});
    customElements.define('universal-robots-mt-dashboard-pro-my-pg1', mypg1Component);
    const mysk1Component = createCustomElement(MySk1Component, {injector: this.injector});
    customElements.define('universal-robots-mt-dashboard-pro-my-sk1', mysk1Component);
    const mybar1Component = createCustomElement(MyBar1Component, {injector: this.injector});
    customElements.define('universal-robots-mt-dashboard-pro-my-bar1', mybar1Component);
    const myos1Component = createCustomElement(MyOs1Component, {injector: this.injector});
    customElements.define('universal-robots-mt-dashboard-pro-my-os1', myos1Component);
  }

  // This function is never called, because we don't want to actually use the workers, just tell webpack about them
  registerWorkersWithWebPack() {
    new Worker(new URL('./components/Machine-Tending/Machine-Tending.behavior.worker.ts'
        /* webpackChunkName: "Machine-Tending.worker" */, import.meta.url), {
      name: 'Machine-Tending',
      type: 'module'
    });new Worker(new URL('./components/my-pg1/my-pg1.behavior.worker.ts'
        /* webpackChunkName: "my-pg1.worker" */, import.meta.url), {
      name: 'my-pg1',
      type: 'module'
    });new Worker(new URL('./components/my-sk1/my-sk1.behavior.worker.ts'
        /* webpackChunkName: "my-sk1.worker" */, import.meta.url), {
      name: 'my-sk1',
      type: 'module'
    });new Worker(new URL('./components/my-bar1/my-bar1.behavior.worker.ts'
        /* webpackChunkName: "my-bar1.worker" */, import.meta.url), {
      name: 'my-bar1',
      type: 'module'
    });new Worker(new URL('./components/my-os1/my-os1.behavior.worker.ts'
        /* webpackChunkName: "my-os1.worker" */, import.meta.url), {
      name: 'my-os1',
      type: 'module'
    });
  }
}

