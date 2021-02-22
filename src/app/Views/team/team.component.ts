import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  title = 'demo';
  MyColumns = MyColumnsTest;
  MySampleData = MySampleDataTest;
}




const MyColumnsTest: string[] = ['MitarbeiterNR', 'Name', 'Vorname', 'Abteilung'];
export interface PeriodicElement {
  Vorname: string;
  MitarbeiterNR: number;
  Name: string;
  Abteilung: string;
}
const MySampleDataTest: PeriodicElement[] = [
  { MitarbeiterNR: 1, Vorname: 'Jan', Name: 'Kalo', Abteilung: 'Logistik' },
  { MitarbeiterNR: 2, Vorname: 'Tilo', Name: 'Littmann', Abteilung: 'Personal' },
  { MitarbeiterNR: 3, Vorname: 'Sabrina', Name: 'Steller', Abteilung: 'Logistik' },
  { MitarbeiterNR: 4, Vorname: 'Josephin', Name: 'Nachname', Abteilung: 'Personal' },
  { MitarbeiterNR: 5, Vorname: 'Christoph', Name: 'Nachname', Abteilung: 'Logistik' },
  { MitarbeiterNR: 6, Vorname: 'Janus', Name: 'Nachname', Abteilung: 'Logistik' },
  { MitarbeiterNR: 7, Vorname: 'Sara', Name: 'Nachname', Abteilung: 'Personal' },
  { MitarbeiterNR: 8, Vorname: 'Sandra', Name: 'Nachname', Abteilung: 'Logistik' },
  { MitarbeiterNR: 9, Vorname: 'Lina', Name: 'Nachname', Abteilung: 'Personal' },
  { MitarbeiterNR: 10, Vorname: 'Monika', Name: 'Nachname', Abteilung: 'Logistik' },
];