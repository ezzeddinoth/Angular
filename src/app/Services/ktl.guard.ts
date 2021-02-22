import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class KtlGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  checkLogin(): true | UrlTree | any {
    let val: string | any = this.authService.getUsername() ? "true" : "false";

    if (val != null && val == "true") {
      return true;
    } else {
      return this.router.navigate(['/login']);
    }
  }

}
