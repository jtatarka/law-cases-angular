import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LawCaseItemComponent } from './components/law-case-item/law-case-item.component';
import { LawCaseListComponent } from './components/law-case-list/law-case-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LawCaseItemComponent,
    LawCaseListComponent
  ],
  exports: [
    LawCaseItemComponent,
    LawCaseListComponent
  ]
})
export class LawCasesModule { }
