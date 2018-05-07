import { Component, OnInit } from '@angular/core';

import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers: [Location]
})
export class HouseComponent implements OnInit {

  public id;
  public house;
  public goback() {
    this.location.back();
  }

  constructor(public _route: ActivatedRoute, public router: Router, public gotservice: GotHttpService, public location: Location) {


  }

  public getSingleHouseDetails = (id) => {
    this.gotservice.getSingleHouse(id).subscribe(
      response => {
        this.house = response;
        console.log(this.house);
      },
      error => {
        console.log("some error occurred")
      }
    );
  }
  ngOnInit() {

    this.id = this._route.snapshot.paramMap.get('id');
    this.getSingleHouseDetails(this.id);


  }

}

