import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {allIncomesUrl} from "../../models/urls";
import {Income} from "../../models/income";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  // TODO: add module
  constructor(private httpClient: HttpClient) { }

  getAllIncomes(): Observable<Array<Income>> {
    return this.httpClient.get<Array<Income>>(allIncomesUrl)
  }
}
