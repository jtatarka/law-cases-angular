import { Component, Input } from '@angular/core';

import { LawCase } from 'src/app/modules/law-cases-api';

@Component({
  selector: 'app-law-case-item',
  templateUrl: './law-case-item.component.html',
  styleUrls: ['./law-case-item.component.scss']
})
export class LawCaseItemComponent {
  @Input()
  private lawCase: LawCase;

  constructor() { }
}
