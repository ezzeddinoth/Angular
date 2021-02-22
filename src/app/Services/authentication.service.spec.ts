import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getObservableValue should return value from observable',
    () => {
      service.isLoggedIn().subscribe(value => {
        expect(value).toBe('observable value');
      });
    });

  it('#logout should call removeLocalStorage',
    () => {
      spyOn(service, 'removeLocalStorage').and.callFake;
      spyOn(service, 'updateLogger').and.callFake;
      service.logout();
      expect(service.removeLocalStorage).toHaveBeenCalled();
      expect(service.updateLogger).toHaveBeenCalled();
    });

  it('#checkCredentials should call login return true',
    () => {
      spyOn(service, 'login').and.callFake;
      expect(service.checkCredentials("user1", "user")).toBe(true);
      expect(service.login).toHaveBeenCalled();
    });

  it('#checkCredentials should return false',
    () => {
      expect(service.checkCredentials("fake", "fake")).toBe(false);
      expect(service.checkCredentials("user1", "fake")).toBe(false);
      expect(service.checkCredentials("fake", "user")).toBe(false);
    });

  it('#login should call updateLocalStorage, updateLogger',
    () => {
      spyOn(service, 'updateLocalStorage').and.callFake;
      spyOn(service, 'updateLogger').and.callFake;
      expect(service.login("username", "password"));
      expect(service.updateLocalStorage).toHaveBeenCalled();
      expect(service.updateLogger).toHaveBeenCalled();
    });

  it('#updateLocalStorage should  update LocalStorage with//username+password//',
    () => {
      service.updateLocalStorage("fakeUsername", "fakePassword");
      expect(localStorage.getItem("username")).toBe("fakeUsername");
      expect(localStorage.getItem("password")).toBe("fakePassword");
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    });

  it('#removeLocalStorage should call remove //username+password// from LocalStorage',
    () => {
      localStorage.setItem('username', "fakeUsername");
      localStorage.setItem('password', "fakePassword");
      service.removeLocalStorage();
      expect(localStorage.getItem("username")).toBe(null);
      expect(localStorage.getItem("password")).toBe(null);
    });
});
