import { LawCase } from './law-case.model';

export class LawCaseApiResponse {
  count: number;
  next: string;
  previous: string;
  results: LawCase[];

  constructor(count: number, next: string, previous: string, results: LawCase[]) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}
