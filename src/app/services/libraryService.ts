import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { config } from '../config';
import { HttpClient } from './httpService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



const API_BASE_URL = config.apiBaseUrl.development
@Injectable()
export class LibraryService {
  constructor(
    private http: HttpClient) {}

    libraryList=[
        {
            name:"Innovation Hub Nepal",
            distance:"1.2 km Navigate",
            location:"Teku, Pachali Height ,Kathmandu 44600",
            opening:"10Am-5Pm",
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png"
        },
        {
            name:"Asa Archives (Asa Saphu Kuthi)",
            distance:"1.4 km Navigate",
            location:"Tangal, GPO Box: 13588, Ktm",
            opening:"9Am-6Pm",
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png"
        },   {
            name:"Biplavi Pustakalaya",
            distance:"1.2 km Navigate",
            "Address":"Nhainkatala",
            opening:"9Am-5Pm",
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png"
        },   {
            name:"British Council",
            distance:"1.2 km Navigate",
            location:"Lainchaur, GPO Box: 640, Ktm",
            opening:"10Am-7Pm",
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png"
        },   {
            name:"Buddhi Vikas Mandal",
            distance:"3.5 km Navigate",
            location:"Lagankhel, Kathmandu",
            opening:"10Am-5Pm",
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png"
        },   {
            name:"Central Library",
            distance:"2.8 km Navigate",
            location:"Kirtipur ,Kathmandu",
            opening:"10Am-6Pm",
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png"
        }
    ]

   fetchLibrary(){
        return new Promise((resolve,reject)=>{
            let library=[]
            var x = Math.floor((Math.random() * 4)+2 );
            console.log(x,"random number")
            for(var i=0;i<x;i++){
                library.push(this.libraryList[i]);
            }
            console.log(library,"librayr random")
            resolve(library);
            
        })
   }
 
 
}
