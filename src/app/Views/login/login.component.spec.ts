import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthenticationService;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    spyOn(router, 'navigate').and.callFake;
    expect(component).toBeTruthy();
  });

  it('#onClickSubmit should activate errorMessage', () => {
    spyOn(service, 'checkCredentials').and.returnValue(false);
    expect(component.onClickSubmit({}));
    expect(component.ErrorMessage).toBe(true);
  });

  it('#onClickSubmit should navigate to /teile', () => {
    spyOn(router, 'navigate').and.callFake;
    spyOn(service, 'checkCredentials').and.returnValue(true);
    expect(component.onClickSubmit({}))
    expect(component.ErrorMessage).toBe(false);
  });
  it('#ngOnInit if bereich known navigate to login', () => {
    spyOn(service, 'getUsername').and.returnValue('anyUsername');
    spyOn(router, 'navigate').and.callFake;
    component.ngOnInit()
    expect(router.navigate).toHaveBeenCalledWith(['/teile'])
  });
  it('#ngOnInit if bereich unknown initialize formData', () => {
    /*
    */
  });
});
