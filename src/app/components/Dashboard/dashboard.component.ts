import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BookService } from '../../services/bookService';
import { QuoteService } from '../../services/quoteService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.style.css']
})

export class DashboardComponent {

  bookList = [];
  quoteList: any;
  constructor(
    private bookService: BookService,
    private quoteService: QuoteService
  ) { }

  ngOnInit() {

    this.bookService.getBooks()
      .subscribe(
        data => {
          // console.log([data[Math.floor(Math.random() * data.length)]]);
          // console.log(data.slice(1, 5));
          this.bookList = data;
          console.log('booklist', this.bookList);
        },
        error => {
          console.log('error', error);
        }
      );



    this.quoteService.getQuote()
      .subscribe(
        data => {
          console.log([data[Math.floor(Math.random() * data.length)]]);
          console.log(data);
          this.quoteList = data[(Math.floor(Math.random() * data.length))];
          console.log('quoteList', this.quoteList)
        },
        error => {
          console.log('error', error);
        }
      );
  }


}