import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LogoutComponent } from './logout.component';
import { AuthenticationService } from '../../Services/authentication.service';
describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let service: AuthenticationService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LogoutComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AuthenticationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#username should contains username', () => {
    service = TestBed.inject(AuthenticationService);
    service.updateLogger("testUsername")
    component.ngOnInit();
    expect(component.username).toBe("testUsername")
  });

  it('#onClickLogout should call logout', () => {
    spyOn(service, 'logout').and.callFake
    spyOn(component, 'windowReload').and.callFake
    expect(component.onClickLogout());
    expect(service.logout).toHaveBeenCalled;
    expect(component.windowReload).toHaveBeenCalled;
  });
});
