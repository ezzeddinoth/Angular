import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BereichGuard } from './bereich.guard';
import { BereichService} from './bereich.service'
//import { Location } from '@angular/common';
import { AuthenticationService} from'./authentication.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
describe('BereichGuard', () => {
  let service: BereichService
  let guard: BereichGuard;
  //let location: Location;
  let route:ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  let router: Router;
  beforeEach(() => {

    TestBed.configureTestingModule({  imports: [RouterTestingModule]});
    guard = TestBed.inject(BereichGuard);
    service = TestBed.inject(BereichService);
    router = TestBed.inject(Router);
    //location = TestBed.inject(Location);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('#checkBereich should return true', ()=> {
    spyOn(service, 'getBereich').and.returnValue('anyBereich');
    expect(guard.checkBereich()).toBe(true);
    expect(service.getBereich).toHaveBeenCalled();
  });

  it('#checkBereich should return false', ()=> {
    spyOn(router,'navigate')
    spyOn(service, 'getBereich').and.returnValue(null);
    console.log(guard.checkBereich());
    expect(service.getBereich).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/selectbereich']);
  });
  it('#canActivate should return checkBereich', ()=> {
    spyOn(guard,'checkBereich').and.callFake
    expect(guard.canActivate(route,state))
    expect(guard.checkBereich).toHaveBeenCalled();
  });
});
