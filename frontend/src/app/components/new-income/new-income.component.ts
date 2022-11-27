import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IncomeService} from "../../services/income-service/income.service";
import {Income} from "../../models/income";
import {Router} from "@angular/router";
import {incomeListUrl} from "../../models/urls";

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

  incomeForm = new FormGroup({
    category: new FormControl<string>('GIFT'),
    currency: new FormControl<string>('USD'),
    amount: new FormControl<number>(500),
    person: new FormControl<string>(''),
    timestamp: new FormControl<Date>(new Date())
  })

  constructor(private incomeService: IncomeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmitData() {
    console.log("sending data to backend")
    console.log("form value: " + JSON.stringify(this.incomeForm.value, null, 2))
    const income = this.createIncomeBasedOnFormValues()
    console.log("sending data to backend: " + JSON.stringify(income, null, 2))
    this.incomeService.createNewIncome(income)
      .subscribe(
        () => this.router.navigate([incomeListUrl])
      )
  }

  private createIncomeBasedOnFormValues(): Income {
    return {
      creationTimestamp: null,
      id: null,
      updateTimestamp: null,
      category: this.incomeForm.value.category || 'SALARY',
      currency: this.incomeForm.value.currency || 'EUR',
      amount: this.incomeForm.value.amount || 0,
      person: this.incomeForm.value.person || '',
      timestamp: this.incomeForm.value.timestamp?.toISOString() || new Date().toISOString()
    }
  }
}
