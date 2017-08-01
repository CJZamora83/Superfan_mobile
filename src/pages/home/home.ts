import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trending: {
    systemname: string,
    username: string,
    type: string,
    link: string,
    createdAt: string,
    image: string,
    video: string,
    caption: string,
    comments: number,
    likes: number,
    views: number
  }[];

  constructor(public navCtrl: NavController, public http: Http) {

    this.initializeItems();
  }

  initializeItems() {
    this.http.get('http://superfanlove.herokuapp.com/api/trending').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.trending = data;
    });
  }
}
