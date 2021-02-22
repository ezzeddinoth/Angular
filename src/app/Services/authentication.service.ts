import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
   providedIn: 'root'
})
export class AuthenticationService {
   constructor() { }
   private logger = new Subject<string | null>();

   isLoggedIn(): Observable<string | null> {
      return this.logger.asObservable();
   }

   updateLogger(username: string | null) {
      this.logger.next(username);
   }

   updateLocalStorage(username: string, password: string) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
   }

   removeLocalStorage() {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
   }

   getUsername() {
      return localStorage.getItem('username');
   }

   checkCredentials(username: string, password: string) {
      if ((username == 'user1' && password == 'user') || (username == 'user2' && password == 'user')) {
         this.login(username, password);
         return true;
      }
      else
         return false
   }
   login(username: string, password: string): void {
      this.updateLocalStorage(username, password);
      this.updateLogger(username);
   }

   logout(): void {
      this.removeLocalStorage();
      this.updateLogger(null);
   }

}
