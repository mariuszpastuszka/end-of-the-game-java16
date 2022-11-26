import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.css']
})
export class NewIncomeComponent implements OnInit {

  categories = [
    'SALARY',
    'GIFT',
    'GOVERNMENT_SUPPORT',
    'ADHOC_WORK',
    'RENT',
    'DIVIDEND',
    'OTHER'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitData() {
    console.log("sending data to backend")
  }
}
