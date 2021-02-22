import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columnsName: String[] | any;
  @Input() Data: Object[] | any;
  title = "dynamicTable"
  constructor() { }

  ngOnInit(): void {
  }

}

