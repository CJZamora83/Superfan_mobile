import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FeedProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FeedProvider {
  i: number;
  favorites: string[];
  feed: {
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
    this.feed = [];
    this.favorites = [];
  };

  getFeed(skip) {
    return new Promise(resolve => {
      this.http.get('http://superfanlove.herokuapp.com/api/mobile-search?search=' + this.favorites.join(';') + '&skip=' + skip)
        .map(res => res.json())
        .subscribe(data => {
          for (this.i = 0;this.i < data.length;this.i++) {
            this.feed.push(data[this.i]);
          }

          resolve(this.feed);
        });
    });
  };

  toggleFavorite(string) {
    if (this.favorites.indexOf(string) >= 0) {
      this.favorites.splice(this.favorites.indexOf(string), 1);
    } else {
      this.favorites.push(string);
    }

    console.log(this.favorites);
  };

  clear() {
    this.favorites = [];
    this.feed = [];
  };

}
