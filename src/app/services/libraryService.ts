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
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png",
            availableStatus:"Available",
            display:false
        },
        {
            name:"Asa Archives (Asa Saphu Kuthi)",
            distance:"1.4 km Navigate",
            location:"Tangal, GPO Box: 13588, Ktm",
            opening:"9Am-6Pm",
            imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/05/94/cd/f2/kaiser-library.jpg",
            availableStatus:"Taken",
            display:false
        },   {
            name:"Biplavi Pustakalaya",
            distance:"1.2 km Navigate",
            "Address":"Nhainkatala",
            opening:"9Am-5Pm",
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png",
            availableStatus:"Returning in 2 days.",
            display:true
        },   {
            name:"British Council",
            distance:"1.2 km Navigate",
            location:"Lainchaur, GPO Box: 640, Ktm",
            opening:"10Am-7Pm",
            imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/05/94/cd/f2/kaiser-library.jpg",
            availableStatus:"Available",
            display:false
        },   {
            name:"Buddhi Vikas Mandal",
            distance:"3.5 km Navigate",
            location:"Lagankhel, Kathmandu",
            opening:"10Am-5Pm",
            imageUrl:"https://www.google.com/search?q=library+imags&client=firefox-b-ab&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiGh-zD1MXbAhVNOisKHfUrAIMQ_AUICigB&biw=1366&bih=654#imgrc=e55qvQb_RXxToM:",
            availableStatus:"Available",
            display:false
        },   {
            name:"Central Library",
            distance:"2.8 km Navigate",
            location:"Kirtipur ,Kathmandu",
            opening:"10Am-6Pm",
            imageUrl:"http://www.jyotishree.com/images/portfolio/ihub.png",
            availableStatus:"Available",
            display:false
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
