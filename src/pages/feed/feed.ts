import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SettingsPage } from '../settings/settings';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {


  constructor(public navCtrl: NavController, private http: Http) {
    this.getFeed(0)
  }

    favorites: any[];
    celebList: string;


  getFeed(skip) {

    this.favorites.join(';');
    this.http.get('http://superfanlove.herokuapp.com/api/mobile-search?search=' this.favorites.join + '&skip=' + skip).map(res => res.json()).subscribe(data => {
      console.log(data);
    });
  }

}


//set up Feed provider
// set up function to launch and clear feed favorites
// set up function to remove individual celebritites from faves array
