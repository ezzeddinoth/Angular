import { TestBed } from '@angular/core/testing';
import { BereichService } from './bereich.service';

describe('BereichService', () => {
  let service: BereichService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BereichService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#isSelected should return value from observable',
    () => {
      service.isSelected().subscribe(value => {
        expect(value).toBe('observable value');
      });
    });

  it('#removeBereich should call removeLocalStorage',
    () => {
      spyOn(service, 'removeLocalStorage').and.callFake;
      spyOn(service, 'updateBereich').and.callFake;
      service.removeBereich();
      expect(service.updateBereich).toHaveBeenCalled();
      expect(service.removeLocalStorage).toHaveBeenCalled();
    });

  it('#setBereich should call checkBereich return true',
    () => {
      spyOn(service, 'checkBereich').and.returnValue(true);
      spyOn(service, 'updateLocalStorage').and.callFake;
      spyOn(service, 'updateBereich').and.callFake;
      expect(service.setBereich("anyBereich")).toBe(true);
      expect(service.checkBereich).toHaveBeenCalled();
      expect(service.updateLocalStorage).toHaveBeenCalled();
      expect(service.updateBereich).toHaveBeenCalled();
    });

  it('#setBereich should call checkBereich return false',
    () => {
      spyOn(service, 'checkBereich').and.returnValue(false);
      expect(service.setBereich("fake")).toBe(false);
      expect(service.checkBereich).toHaveBeenCalled();
    });

  it('#updateLocalStorage should write param in localStorage', () => {
    service.updateLocalStorage("test");
    expect(localStorage.getItem('bereich')).toBe("test");
    localStorage.removeItem("bereich");
  });
  it('#updateLocalStorage should update //bereich// in localStorage', () => {
    expect(service.updateLocalStorage("anyBereich")).toBe(undefined);
    expect(localStorage.getItem("bereich")).toBe("anyBereich");
    localStorage.removeItem("bereich")
  });
  it('#removeBereich should remove item bereich from localStorage', () => {
    localStorage.setItem("bereich", "test");
    service.removeLocalStorage();
    expect(localStorage.getItem("bereich")).toBe(null);
  });
  it('#chechBereich should return true if bereich is known', () => {
    expect(service.checkBereich("Laden")).toBe(true);
  });
  it('#chechBereich should return false if bereich is unknown', () => {
    expect(service.checkBereich('')).toBe(false);
  });

  it('#removeLocalStorage should remove //bereich// from localStorage', () => {
    localStorage.setItem("bereich", "anyBereich");
    service.removeLocalStorage();
    expect(localStorage.getItem("bereich")).toBe(null);
  });

});