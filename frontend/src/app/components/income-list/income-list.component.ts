import { Component, OnInit } from '@angular/core';
import {IncomeService} from "../../services/income-service/income.service";
import {Income} from "../../models/income";

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {

  title: string = 'Income list'
  incomes: Array<Income> = []

  constructor(private incomeService: IncomeService) { }

  ngOnInit(): void {
    this.incomeService.getAllIncomes()
      .subscribe(value => {
        this.incomes = value
        console.log('got results from spring')
        console.log('results: ' + JSON.stringify(this.incomes))
      })
  }

}
