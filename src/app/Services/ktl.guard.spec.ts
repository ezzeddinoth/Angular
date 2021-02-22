import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { KtlGuard } from './ktl.guard';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


describe('KtlGuard', () => {
  let guard: KtlGuard;
  let service: AuthenticationService;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule], });
    guard = TestBed.inject(KtlGuard);
    service = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('#checkLogin should return true', () => {
    spyOn(service, 'getUsername').and.returnValue('anyUsername');
    expect(guard.checkLogin()).toBe(true);
    expect(service.getUsername).toHaveBeenCalled();
  });

  it('#checkLogin should return false', () => {
    spyOn(router, 'navigate').and.callFake;
    spyOn(service, 'getUsername').and.returnValue(null);
    console.log(guard.checkLogin());
    expect(service.getUsername).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('#canActivate should call checkLogin', () => {
    spyOn(guard, 'checkLogin').and.callFake
    expect(guard.canActivate(route, state))
    expect(guard.checkLogin).toHaveBeenCalled();
  });
});
