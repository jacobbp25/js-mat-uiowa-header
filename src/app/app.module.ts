import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiowaHeaderMatModule } from 'projects/uiowa/uiowa-header-mat/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiowaHeaderMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
