import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookService } from '../../services/bookService';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.style.css']
})

export class ProfileComponent implements OnInit {

  readBooks = [];
  wishList = [];
  reading = [];

  constructor(
    private http: Http,
    private bookService: BookService
  ) { }

  ngOnInit() { 
    this.bookService.getBooksByUser()
      .subscribe(
        data => {
          console.log(data, 'data');
          this.readBooks = data[0].readBooks[0].details;
          console.log(this.readBooks);
          this.wishList = data[0].wishList;
          this.reading = data[0].reading;
        },
        error => {

        }
      );
  }

}