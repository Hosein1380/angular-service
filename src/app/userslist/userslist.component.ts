import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  mainArray: any;

  constructor(private mainservice:MainService) { }

  ngOnInit(): void {

    this.mainservice.getpost().subscribe(res => 
      {
        this.mainArray=res
        // console.log(res);
        
        
      });

  }

}
