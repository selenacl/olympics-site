import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../../Constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    getCountriesByYear(year: number) {
        return this.http.get(Constants.apiUrl + `/countries/${year}`);
    }

    getAthletesByYear(year: number) {
        return this.http.get(Constants.apiUrl + `/athletes/${year}`);
    }
}