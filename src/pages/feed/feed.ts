import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  constructor(public navCtrl: NavController, public http: Http) {
    this.getFeed(0)
  }

  getFeed(skip) {
    this.http.get('http://superfanlove.herokuapp.com/api/mobile-search?search=taylorhill&skip=' + skip).map(res => res.json()).subscribe(data => {
      console.log(data);
    });
  }

}
