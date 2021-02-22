import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RemoveBereichComponent } from './remove-bereich.component';
import { BereichService } from '../../Services/bereich.service';
import { AuthenticationService } from '../../Services/authentication.service';

describe('RemoveBereichComponent', () => {
  let component: RemoveBereichComponent;
  let fixture: ComponentFixture<RemoveBereichComponent>;
  let service: AuthenticationService;
  let bService: BereichService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RemoveBereichComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AuthenticationService);
    bService = TestBed.inject(BereichService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#username should contains username', () => {
    bService = TestBed.inject(BereichService);
    bService.updateBereich("testBereich")
    component.ngOnInit();
    expect(component.bereich).toBe("testBereich")
  });

  it('#onClickremoveBereich should call logout', () => {
    spyOn(component, 'windowReload').and.callFake
    spyOn(service, 'logout').and.callFake
    spyOn(bService, 'removeBereich').and.callFake
    expect(component.onClickremoveBereich());
    expect(service.logout).toHaveBeenCalled;
    expect(bService.removeBereich).toHaveBeenCalled;
    expect(component.windowReload).toHaveBeenCalled;
  });
});
