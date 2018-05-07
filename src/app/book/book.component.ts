import { Component, OnInit } from '@angular/core';

import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [Location]
})
export class BookComponent implements OnInit {

  public id;
  public book;
  public goback() {
    this.location.back();
  }

  constructor(public _route: ActivatedRoute, public router: Router, public gotservice: GotHttpService, public location: Location) {


  }

  public getSingleBookDetails = (id) => {
    this.gotservice.getSingleBook(id).subscribe(
      response => {
        this.book = response;
        console.log(this.book);
      },
      error => {
        console.log("some error occurred")
      }
    );
  }
  ngOnInit() {

    this.id = this._route.snapshot.paramMap.get('id');
    this.getSingleBookDetails(this.id);


  }

}
