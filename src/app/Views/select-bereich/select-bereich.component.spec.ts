import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectBereichComponent } from './select-bereich.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BereichService } from '../../Services/bereich.service';
import { Router } from '@angular/router';

describe('SelectBereichComponent', () => {
  let component: SelectBereichComponent;
  let fixture: ComponentFixture<SelectBereichComponent>;
  let service: BereichService;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SelectBereichComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(BereichService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onClickSubmit should activate errorMessage', () => {
    spyOn(service, 'setBereich').and.returnValue(false);
    expect(component.onClickSubmit({}))
    expect(component.ErrorMessage).toBe(true);
  });

  it('#onClickSubmit should activate errorMessage', () => {
    spyOn(service, 'setBereich').and.returnValue(true);
    expect(component.onClickSubmit({}))
    expect(component.ErrorMessage).toBe(false);
  });

  it('#ngOnInit if bereich known navigate to login', () => {
    spyOn(service, 'getBereich').and.returnValue('anyBereich');
    spyOn(router, 'navigate').and.callFake;
    component.ngOnInit()
    expect(router.navigate).toHaveBeenCalledWith(['/login'])
  });
});
