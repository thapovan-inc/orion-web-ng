import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import {SearchService} from './search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}