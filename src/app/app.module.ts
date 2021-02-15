import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//creado sol
import { Injector } from '@angular/core'
import { createCustomElement } from '@angular/elements';  
//


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  //creado sol
  constructor(private injector: Injector) {
  const el = createCustomElement(AppComponent, { injector });
  customElements.define('cejs-elements', el);
}
  ngDoBootstrap(){}
  //
}
