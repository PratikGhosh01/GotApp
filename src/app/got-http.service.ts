import { Injectable } from '@angular/core';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'

@Injectable()
export class GotHttpService {


  public baseUrl = 'https://www.anapioficeandfire.com/api/';


  constructor(private _http: HttpClient) {
    
  }


  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  getAllBooks(): any {

    let myResponse = this._http.get(this.baseUrl + 'books')
    return myResponse;
  }

  getAllCharacters(): any {

    let myResponse = this._http.get(this.baseUrl + 'characters')
    return myResponse;
  }

  getAllHouses(): any {

    let myResponse = this._http.get(this.baseUrl + 'houses')
    return myResponse;
  }

  public getSingleBook = (id: number) => {
    let response = this._http.get(this.baseUrl + 'books' + '/' + id);
    return response;
  }

  public getSingleCharacter = (id: number) => {
    let response = this._http.get(this.baseUrl + 'characters' + '/' + id);
    return response;
  }
  public getSingleHouse = (id: number) => {
    let response = this._http.get(this.baseUrl + 'houses' + '/' + id);
    return response;
  }




}
    
    




