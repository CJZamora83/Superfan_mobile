import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  favorites: string[];
  celebList: string;

  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams) {
    this.getFeed(0);
    this.favorites = navParams.get('favorites');
    console.log(this.favorites);
  }

  getFeed(skip) {
    this.celebList = this.favorites.join(';');
    this.http.get('http://superfanlove.herokuapp.com/api/mobile-search?search=' + this.celebList + '&skip=' + skip).map(res => res.json()).subscribe(data => {
      console.log(data);
    });
  }

}
