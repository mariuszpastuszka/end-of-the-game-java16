import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.css']
})
export class NewIncomeComponent implements OnInit {

  categories = [
    {displayedValue: 'Salary', value: 'SALARY'},
    {displayedValue: 'Gift', value: 'GIFT'},
    {displayedValue: 'Government support', value: 'GOVERNMENT_SUPPORT'},
    {displayedValue: 'Adhoc work', value: 'ADHOC_WORK'},
    {displayedValue: 'Rent', value: 'RENT'},
    {displayedValue: 'Dividend', value: 'DIVIDEND'},
    {displayedValue: 'Other', value: 'OTHER'}
  ]

  currencies = [
    'EUR',
    'PLN',
    'CAN',
    'USD',
    'UAH',
    'GBP'
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmitData() {
    console.log("sending data to backend")
  }
}
