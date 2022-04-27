import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MainService {

url="https://api.github.com/users";

  constructor(private http:HttpClient) { }

  getpost(){
    return this.http.get(this.url);
  }


}
