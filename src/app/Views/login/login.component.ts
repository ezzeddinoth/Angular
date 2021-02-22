import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string | any;
  password: string | any;
  formData: FormGroup | any;

  constructor(private authService: AuthenticationService, private router: Router) { }
  ErrorMessage = false;
  ngOnInit(): void {
    if (this.authService.getUsername !== null) {
      this.router.navigate(['/teile']);
    }
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),
    });

  }
  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    if (this.authService.checkCredentials(this.userName, this.password))
      this.router.navigate(['/teile']);
    else this.ErrorMessage = true;
  }
}
