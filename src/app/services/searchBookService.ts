import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { config } from '../config';
import { HttpClient } from './httpService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



const API_BASE_URL = config.apiBaseUrl.development
@Injectable()
export class SearchBookService {
  constructor(
    private http: HttpClient
  ) {
      console.log(API_BASE_URL,"url")
   }

   searchBook(bookName:any){
       let bname=encodeURI(bookName);
       let url=`https://www.googleapis.com/books/v1/volumes?q=${bname}`;
       console.log(url)
        return this.http.get(url)
        .map((res:Response)=>res.json())
        .catch((error:Response)=>Observable.throw(error.json()))
   }    

 
}
