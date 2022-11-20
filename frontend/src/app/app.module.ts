import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IncomeListComponent} from './components/income-list/income-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ExpenseListComponent} from './components/expense-list/expense-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    IncomeListComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: '', component: IncomeListComponent},
      {path: 'income-list', component: IncomeListComponent},
      {path: 'expense-list', component: ExpenseListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
