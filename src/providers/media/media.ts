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

  constructor(public http: Http) {

    this.getTrending();

  }

  getTrending() {
    this.http.get('http://superfanlove.herokuapp.com/api/trending').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.trending = data;
    });
  }

}
