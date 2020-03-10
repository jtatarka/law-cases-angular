import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';

import { LawCasesModule } from './modules/law-cases/law-cases.module';
import { LawCasesService } from './modules/law-cases-api/';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LawCasesModule,
    NgbModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [LawCasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
