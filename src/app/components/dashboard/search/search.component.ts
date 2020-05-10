import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';
import { SearchService } from './search.service';
import { Constants } from '../../../Constants';
import { Router, NavigationEnd } from '@angular/router';


export interface SearchGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public countries;
  public athletes;
  public searchList: String = 'country';
  data;

  @Output()
  selected = new EventEmitter<String>();

  searchForm: FormGroup = this._formBuilder.group({
    SearchGroup: '',
  });

  SearchGroups: SearchGroup[];

  SearchGroupOptions: Observable<SearchGroup[]>;

  constructor(private _formBuilder: FormBuilder,
    private _searchService: SearchService,
    private router: Router, ) {

  }

  ngOnInit() {
    // check for route changes
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.searchList = this.router.url.substring(1);

          // set search list based on url 
          if (this.searchList == '' || this.searchList == 'country' || this.searchList == '/countries')
            this.getCountriesByYear(Constants.YEAR);
          else if (this.searchList == 'athlete' || this.searchList == 'athletes')
            this.getAthletesByYear(Constants.YEAR);

          this.initSearchGroups();
          this.SearchGroupOptions = this.searchForm.get('SearchGroup')!.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filterGroup(value))
            );
        }
      });

    this._searchService.sharedData.subscribe(data => { this.data = data; console.log(data) });
  }

  private _filterGroup(value: string): SearchGroup[] {
    if (value) {
      return this.SearchGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.SearchGroups;
  }

  getCountriesByYear(year: number) {
    this._searchService.getCountriesByYear(year).subscribe(
      data => { this.countries = data },
      err => console.log(err),
      () => {
        this.countries.forEach(country => {
          const index: number = country.name.trim().charCodeAt(0) - 65;
          this.SearchGroups[index].names.push(country.name.trim());
        });
      }
    );
  }

  getAthletesByYear(year: number) {
    this._searchService.getAthletesByYear(year).subscribe(
      data => { this.athletes = data },
      err => console.log(err),
      () => {
        this.athletes.forEach(athlete => {
          const index: number = athlete.name.trim().toUpperCase().charCodeAt(0) - 65;
          this.SearchGroups[index].names.push(athlete.name.trim());
        });
      }
    )
  }

  onSelect(event: Event) {
    this.selected.emit(event.toString());
    this.newData(event.toString());
  }

  newData(data) {
    this._searchService.nextData(data);
  }

  initSearchGroups() {
    this.SearchGroups = [{
      letter: 'A',
      names: []
    }, {
      letter: 'B',
      names: []
    }, {
      letter: 'C',
      names: []
    }, {
      letter: 'D',
      names: []
    }, {
      letter: 'E',
      names: []
    }, {
      letter: 'F',
      names: []
    }, {
      letter: 'G',
      names: []
    }, {
      letter: 'H',
      names: []
    }, {
      letter: 'I',
      names: []
    }, {
      letter: 'J',
      names: []
    }, {
      letter: 'K',
      names: []
    }, {
      letter: 'L',
      names: []
    }, {
      letter: 'M',
      names: []
    }, {
      letter: 'N',
      names: []
    }, {
      letter: 'O',
      names: []
    }, {
      letter: 'P',
      names: []
    }, {
      letter: 'Q',
      names: []
    }, {
      letter: 'R',
      names: []
    }, {
      letter: 'S',
      names: []
    }, {
      letter: 'T',
      names: []
    }, {
      letter: 'U',
      names: []
    }, {
      letter: 'V',
      names: []
    }, {
      letter: 'W',
      names: []
    }, {
      letter: 'X',
      names: []
    }, {
      letter: 'Y',
      names: []
    }, {
      letter: 'Z',
      names: []
    }];
  }

}
