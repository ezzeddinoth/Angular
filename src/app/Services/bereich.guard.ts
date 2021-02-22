import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BereichService } from './bereich.service';

@Injectable({
  providedIn: 'root'
})
export class BereichGuard implements CanActivate {
  constructor(private bereichService: BereichService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkBereich();
  }
  checkBereich(): true | UrlTree | any {
    let val: string | any = this.bereichService.getBereich();
    if (val != null) {
      return true;
    } else {
      return this.router.navigate(['/selectbereich']);
    }
  }
}
