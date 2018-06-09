import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/Login/auth.component';

import { routing } from './app.routing';
import { AuthenticationService, HttpClient } from './services/index';
import { DashboardComponent } from  './components/Dashboard/dashboard.component';


import { SearchComponent } from './components/search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToasterModule, ToasterService} from 'angular2-toaster';
import { BookService } from './services/bookService';
import { QuoteService } from './services/quoteService';
import { HeaderComponent } from './components/common/header.component';
import { SearchBookComponent } from './components/searchBook/searchBook.component';
import { SearchBookService } from './services/searchBookService';
import { LibraryService } from './services/libraryService';
import { ProfileComponent } from './components/profile/profile.component';
 

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashboardComponent,
    SearchComponent,
    HeaderComponent,
    SearchBookComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ToasterModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService,HttpClient,SearchBookService,LibraryService, BookService, QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
