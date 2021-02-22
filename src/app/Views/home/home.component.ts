import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'demo';
  MyColumns = MyColumnsTest;
  MySampleData = MySampleDataTest;
}




const MyColumnsTest: string[] = ['Teil', 'Material', 'Gewicht', 'Herkunft'];
export interface PeriodicElement {
  Material: string;
  Teil: number;
  Gewicht: number;
  Herkunft: string;
}
const MySampleDataTest: PeriodicElement[] = [
  { Teil: 1, Material: 'Plastik', Gewicht: 1.0079, Herkunft: 'DE' },
  { Teil: 2, Material: 'Eisen', Gewicht: 4.0026, Herkunft: 'DE' },
  { Teil: 3, Material: 'Plastik', Gewicht: 6.941, Herkunft: 'DE' },
  { Teil: 4, Material: 'Plastik', Gewicht: 9.0122, Herkunft: 'DE' },
  { Teil: 5, Material: 'Eisen', Gewicht: 10.811, Herkunft: 'DE' },
  { Teil: 6, Material: 'Eisen', Gewicht: 12.0107, Herkunft: 'DE' },
  { Teil: 7, Material: 'Eisen', Gewicht: 14.0067, Herkunft: 'DE' },
  { Teil: 8, Material: 'Eisen', Gewicht: 15.9994, Herkunft: 'DE' },
  { Teil: 9, Material: 'Eisen', Gewicht: 18.9984, Herkunft: 'DE' },
  { Teil: 10, Material: 'Eisen', Gewicht: 20.1797, Herkunft: 'DE' },
];
