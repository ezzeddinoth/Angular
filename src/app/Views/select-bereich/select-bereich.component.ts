import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BereichService } from '../../Services/bereich.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-select-bereich',
  templateUrl: './select-bereich.component.html',
  styleUrls: ['./select-bereich.component.css']
})
export class SelectBereichComponent implements OnInit {

  ErrorMessage = false;
  bereich: string | any;
  formData: FormGroup | any;

  constructor(private bereichService: BereichService, private router: Router) { }

  ngOnInit(): void {
    if (this.bereichService.getBereich() != null) this.router.navigate(['/login']);
    this.formData = new FormGroup({
      bereich: new FormControl("")
    });
  }
  onClickSubmit(data: any) {
    this.bereich = data.bereich;
    if (this.bereichService.setBereich(this.bereich)) {
      this.router.navigate(['/login']);
    }
    else this.ErrorMessage = true;
  }


}