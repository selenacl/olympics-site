import { Component, OnInit } from '@angular/core';
import { SearchService } from '../dashboard/search/search.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {

  data;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    this._searchService.sharedData.subscribe(data => { this.data = data });
  }

}
