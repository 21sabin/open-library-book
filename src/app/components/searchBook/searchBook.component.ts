import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { SearchBookService } from '../../services/searchBookService';
import { LibraryService } from '../../services/libraryService';
import { ReviewService } from '../../services/reviewService';

declare var hideModel: any;
@Component({
    selector: 'app-searchBook',
    templateUrl:'./searchBook.component.html',
    styleUrls:['./searchBook.component.style.css']
     
})
export class SearchBookComponent {
  constructor(private searchBookService:SearchBookService ,
    private libraryService:LibraryService ,
  private reviewService:ReviewService){}
  bookName:string;
  libraryList:any;

  @Input() getBookName:string;
  @Output() diplaEventEmitter: EventEmitter<boolean> = new EventEmitter();
  
    title:string;
    author:string;
    imageUrl:any;
    description:any;
    displayFlag:boolean=false;
    whistList:boolean=false;
    review:string;

    readMsg="Read";
  
  
    
  ngOnInit(){
    console.log(this.getBookName,"hdjsfh")
  }
  whishListClicked(){
    console.log(this.whistList,"clicked")
    this.whistList=true;
    setTimeout(()=>{
      this.whistList=false;
    },3000)
  }
  onClickRed(){
    this.readMsg="Done";
  }
  getReview(){
    console.log(this.review,"review")
    this.reviewService.getReview(this.review);
  }
  closeModal(){
    hideModel();
  }
  searchBook(){
    this.searchBookService.searchBook(this.bookName)
    .subscribe(
        data=>{
          console.log(data,"fetch api book")
            console.log(data.items[0].volumeInfo.description);
            this.imageUrl=data.items[0].volumeInfo.imageLinks.thumbnail;
            this.title=data.items[0].volumeInfo.title;
           this.description= data.items[0].volumeInfo.description;
            this.author=data.items[0].volumeInfo.authors[0];
            console.log(this.imageUrl,this.title,this.author,this.description,"bookinfo")
            this.displayFlag=true;
            this.diplaEventEmitter.emit(this.displayFlag)
            this.libraryService.fetchLibrary()
            .then(data=>{
                console.log(data,"library list");
                this.libraryList=data;
               
                
            })
        }, 
        error=>console.log("error")
    )
  }


}