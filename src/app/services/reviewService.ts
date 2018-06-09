import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { config } from '../config';
import { HttpClient } from './httpService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



const API_BASE_URL = config.apiBaseUrl.development
@Injectable()
export class ReviewService {
  constructor(
    private http: HttpClient) {}

    user={
        name:"demoUser@gmail.com",
        review:""
    }

    getReview(review:string){
        console.log(review,"review")
        this.user.review=review;
    }

    fetchReview(){
        return new Promise((resolve,reject)=>{
            resolve(this.user)
        })
    }

  
 
 
}
