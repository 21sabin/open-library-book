import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { SearchBookService } from '../../services/searchBookService';
import { LibraryService } from '../../services/libraryService';

@Component({
    selector: 'app-searchBook',
    templateUrl:'./searchBook.component.html',
    styleUrls:['./searchBook.component.style.css']
     
})
export class SearchBookComponent {
  constructor(private searchBookService:SearchBookService ,private libraryService:LibraryService ){}
  bookName:string;
  libraryList:any;
  
    title:string;
    author:string;
    imageUrl:any;
    description:any;
    displayFlag:boolean=false;
  
  
    
  ngOnInit(){
   
  }

  searchBook(){
    this.searchBookService.searchBook(this.bookName)
    .subscribe(
        data=>{
            console.log(data.items[0].volumeInfo.description);
            this.imageUrl=data.items[0].volumeInfo.imageLinks.thumbnail;
            this.title=data.items[0].volumeInfo.title;
           this.description= data.items[0].volumeInfo.description;
            this.author=data.items[0].volumeInfo.authors[0];
            console.log(this.imageUrl,this.title,this.author,this.description,"bookinfo")
            this.displayFlag=true;
            this.libraryService.fetchLibrary()
            .then(data=>{
                console.log(data,"library list");
                this.libraryList=data
            })
        }, 
        error=>console.log("error")
    )
  }


}