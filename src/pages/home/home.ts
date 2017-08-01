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

  mostRecent: {
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

  twitterHome: {
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

    gramHome: {
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

    tubeHome: {
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

    this.getTrending();
    this.getMostRecent();
    this.getTwitterHome();
    this.getGramHome();
    this.getTubeHome();
  }

  getTrending() {
    this.http.get('http://superfanlove.herokuapp.com/api/trending').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.trending = data;
    });
  }

  getMostRecent() {
    this.http.get('http://superfanlove.herokuapp.com/api/mostRecent').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.mostRecent = data;
    });
  }

  getTwitterHome() {
    this.http.get('http://superfanlove.herokuapp.com/api/twitter/home').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.twitterHome = data;
    });
  }

  getGramHome() {
    this.http.get('http://superfanlove.herokuapp.com/api/instagram/home').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.gramHome = data;
    });
  }

  getTubeHome() {
    this.http.get('http://superfanlove.herokuapp.com/api/youtube/home').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.tubeHome = data;
    });
  }


}
