import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
