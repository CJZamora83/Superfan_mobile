import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Media {

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


  constructor(public http: Http) { }


  getTrending() {
    this.http.get('http://superfanlove.herokuapp.com/api/trending').map(res => res.json()).subscribe(data => {
      this.trending = data;
    });
  }

  getMostRecent() {
    this.http.get('http://superfanlove.herokuapp.com/api/mostrecent').map(res => res.json()).subscribe(data => {
      this.mostRecent = data;
    });
  }

  getTwitterHome() {
    this.http.get('http://superfanlove.herokuapp.com/api/twitter/home').map(res => res.json()).subscribe(data => {
      this.twitterHome = data;
    });
  }

  getGramHome() {
    this.http.get('http://superfanlove.herokuapp.com/api/instagram/home').map(res => res.json()).subscribe(data => {
      this.gramHome = data;
    });
  }

  getTubeHome() {
    this.http.get('http://superfanlove.herokuapp.com/api/youtube/home').map(res => res.json()).subscribe(data => {
      this.tubeHome = data;
    });
  }

}
