import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LawCaseApiResponse } from '../models/law-case-api-response.model';

@Injectable()
export class LawCasesService {
  readonly baseUrl: string = 'https://api.case.law/v1/cases/';

  constructor(private http: HttpClient) { }

  public getCases(): Observable<LawCaseApiResponse> {
    return this.http.get<LawCaseApiResponse>(this.baseUrl);
  }
}
