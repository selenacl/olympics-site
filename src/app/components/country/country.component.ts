import { Component, OnInit } from '@angular/core';
import { SearchService } from '../dashboard/search/search.service';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  data;

  constructor(private _searchService: SearchService) {

  }

  ngOnInit(): void {
    this._searchService.sharedData.subscribe(data => { this.data = data });
  }

  getInfo() {

  }

}
