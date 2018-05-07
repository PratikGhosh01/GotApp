import { Component, OnInit } from '@angular/core';

import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [Location]
})
export class CharacterComponent implements OnInit {

  public id;
  public character;
  public goback() {
    this.location.back();
  }

  constructor(public _route: ActivatedRoute, public router: Router, public gotservice: GotHttpService, public location: Location) {


  }

  public getSingleCharacterDetails = (id) => {
    this.gotservice.getSingleCharacter(id).subscribe(
      response => {
        this.character = response;
        console.log(this.character);
      },
      error => {
        console.log("some error occurred")
      }
    );
  }
  ngOnInit() {

    this.id = this._route.snapshot.paramMap.get('id');
    this.getSingleCharacterDetails(this.id);


  }

}
  
