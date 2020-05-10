import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Constants } from '../../../Constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {

    private data = new BehaviorSubject('');
    sharedData = this.data.asObservable();

    constructor(private http: HttpClient) { }

    getCountriesByYear(year: number) {
        return this.http.get(Constants.apiUrl + `/countries/${year}`);
    }

    getAthletesByYear(year: number) {
        return this.http.get(Constants.apiUrl + `/athletes/${year}`);
    }

    nextData(data) {
        this.data.next(data);
    }

}