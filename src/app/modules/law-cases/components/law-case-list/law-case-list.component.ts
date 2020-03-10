import { Component } from '@angular/core';

import { LawCasesService, LawCase } from 'src/app/modules/law-cases-api';
import { LawCaseApiResponse } from 'src/app/modules/law-cases-api/models/law-case-api-response.model';

@Component({
  selector: 'app-law-case-list',
  templateUrl: './law-case-list.component.html',
  styleUrls: ['./law-case-list.component.scss']
})
export class LawCaseListComponent {
  private lawCases: LawCase[] = [];

  constructor(private lawCasesService: LawCasesService) {
    this.lawCasesService.getCases().subscribe((response: LawCaseApiResponse) => {
      this.lawCases = response.results;
    });
  }
}
