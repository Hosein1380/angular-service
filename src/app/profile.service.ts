import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  url=`https://api.github.com/users`;
 

  constructor(private http:HttpClient) { }

  getprofile(userId: string){
  
    return this.http.get(`${this.url}/${userId}`);


  }
}
