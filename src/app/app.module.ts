import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HhmmssPipe } from './hhmmss.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HhmmssPipe
  ],
  imports: [
    BrowserModule
    ],
  exports: [ HhmmssPipe ],
  providers: [ HhmmssPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
