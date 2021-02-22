import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BereichService {


  constructor() { }

  bereiche = ["Laden", "Etikettieren", "Kette/Abdichten", "Verpacken", "Kotfluegel", "Nacharbeit"];
  private bereich = new Subject<string | null>();

  isSelected(): Observable<string | null> {
    return this.bereich.asObservable();
  }

  updateBereich(selectedBereich: string | null) {
    this.bereich.next(selectedBereich);
  }

  updateLocalStorage(selectedBereich: string) {
    localStorage.setItem('bereich', selectedBereich);
  }

  removeLocalStorage() {
    localStorage.removeItem('bereich');

  }

  getBereich() {
    return localStorage.getItem('bereich');
  }

  checkBereich(bereich: string) {
    if (this.bereiche.includes(bereich, 0))
      return true;
    else return false;
  }

  setBereich(bereich: string) {
    if (this.checkBereich(bereich)) {
      this.updateLocalStorage(bereich);
      this.updateBereich(bereich);
      return true;
    }
    else
      return false
  }

  removeBereich(): void {
    this.removeLocalStorage();
    this.updateBereich(null);
  }

}
