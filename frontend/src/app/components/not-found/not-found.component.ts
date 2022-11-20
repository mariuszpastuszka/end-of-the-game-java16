import { Component, OnInit } from '@angular/core';
import {homeUrl} from "../../models/urls";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  home = homeUrl

  constructor() { }

  ngOnInit(): void {
  }

}
