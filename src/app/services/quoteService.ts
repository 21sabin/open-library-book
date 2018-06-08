import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class QuoteService {

  constructor(
    private http: Http
  ) { }

  getQuote(): Observable<any> {
    return this.http.get('assets/quotes.json')
      .map((res: Response) => res.json())
  }
}