export class LawCase {
  id: Number;
  name_abbreviation: string;
  decision_date: string;
  docket_number: string;
  url: string;

  constructor(id: number, name_abbreviation: string, decision_date: string, docket_number: string, url: string) {
    this.id = id;
    this.name_abbreviation = name_abbreviation;
    this.decision_date = decision_date;
    this.docket_number = docket_number;
    this.url = url;
  }
}
