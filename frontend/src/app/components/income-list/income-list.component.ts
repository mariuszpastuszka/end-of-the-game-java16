import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {

  title: string = 'Income list'

  constructor() { }

  ngOnInit(): void {
  }

}
