import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserslistComponent } from './userslist/userslist.component';


const routes: Routes = [
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path:'',
    component:UserslistComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserslistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
