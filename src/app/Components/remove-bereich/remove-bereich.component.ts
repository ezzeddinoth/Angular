import { Component, OnInit } from '@angular/core';
import { BereichService } from '../../Services/bereich.service';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-remove-bereich',
  templateUrl: './remove-bereich.component.html',
  styleUrls: ['./remove-bereich.component.css']
})
export class RemoveBereichComponent implements OnInit {

  windowReload() {
    window.location.reload();
  }
  bereich = this.bereichService.getBereich();

  subscription: any;

  constructor(private bereichService: BereichService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.bereichService.isSelected()
      .subscribe(b => this.bereich = b);
  }
  onClickremoveBereich() {
    this.bereichService.removeBereich();
    this.authService.logout();
    this.windowReload();
  }

}
