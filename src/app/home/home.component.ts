import { Component, OnInit } from '@angular/core';

import { GotHttpService } from "../got-http.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allInfo = []
  public allBooks
  public allCharacters
  public allHouses

  constructor(private gotHttp: GotHttpService) {
    console.log("home construct called")
  }

  ngOnInit() {


    this.allBooks = this.gotHttp.getAllBooks().subscribe(
      myResponse => {


        this.allInfo = this.allInfo.concat(myResponse)
        console.log(myResponse)
      }
    );

    this.allCharacters = this.gotHttp.getAllCharacters().subscribe(
      myResponse => {


        this.allInfo = this.allInfo.concat(myResponse)
        console.log(myResponse)
      }
    );

    this.allHouses = this.gotHttp.getAllHouses().subscribe(
      myResponse => {


        this.allInfo = this.allInfo.concat(myResponse)
        console.log(myResponse)
      }
    );




  }


}

