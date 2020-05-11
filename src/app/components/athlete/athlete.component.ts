import { Component, OnInit } from '@angular/core';
import { SearchService } from '../dashboard/search/search.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {

  data;
  bronze: number = 10;
  silver: number = 20;
  gold: number = 5;
  total: number = 35;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    this._searchService.sharedData.subscribe(data => { this.data = data });
  }

}
