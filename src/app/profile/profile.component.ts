import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  datas: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
        this.profileService.getprofile(params['id']).subscribe(item => {
          this.datas = item;
          console.log(item);
          
        })
      }
    })
  }
}
