import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';
import { SearchService } from './search.service';
import { Constants } from '../../../Constants';

export interface CountryGroup {
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
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  public countries;

  countryForm: FormGroup = this._formBuilder.group({
    CountryGroup: '',
  });

  CountryGroups: CountryGroup[] = [{
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

  CountryGroupOptions: Observable<CountryGroup[]>;

  constructor(private _formBuilder: FormBuilder, private _searchService: SearchService) { }

  ngOnInit() {
    this.CountryGroupOptions = this.countryForm.get('CountryGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );

    this.getCountriesByYear(Constants.YEAR);
  }

  private _filterGroup(value: string): CountryGroup[] {
    if (value) {
      return this.CountryGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.CountryGroups;
  }

  getCountriesByYear(year: number) {
    this._searchService.getCountriesByYear(year).subscribe(
      data => { this.countries = data },
      err => console.log(err),
      () => {
        this.countries.forEach(country => {
          const index: number = country.name.trim().charCodeAt(0) - 65;
          this.CountryGroups[index].names.push(country.name.trim());
        });
      }
    );
  }

}
