import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  windowReload() {
    window.location.reload();
  }
  username = this.authService.getUsername();
  subscription: any;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn()
      .subscribe(user => this.username = user);
  }
  onClickLogout() {
    this.authService.logout();
    this.windowReload();
  }
}
