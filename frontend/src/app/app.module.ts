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
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatIconModule} from "@angular/material/icon";
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { NewIncomeComponent } from './components/new-income/new-income.component';
import {createNewIncomeUrl, expenseListUrl, homeUrl, incomeListUrl, notFoundUrl} from "./models/urls";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    IncomeListComponent,
    ExpenseListComponent,
    NotFoundComponent,
    NavigationBarComponent,
    NewIncomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: homeUrl, component: IncomeListComponent},
      {path: incomeListUrl, component: IncomeListComponent},
      {path: expenseListUrl, component: ExpenseListComponent},
      {path: createNewIncomeUrl, component: NewIncomeComponent},
      {path: notFoundUrl, component: NotFoundComponent}
    ]),
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
