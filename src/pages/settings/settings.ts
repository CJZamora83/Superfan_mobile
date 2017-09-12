import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  searchQuery: string = '';
  items: { text: string, system: string }[];
  allItems: { text: string, system: string }[];
  favorites : { text: string, system: string }[];

  constructor(public navCtrl: NavController, public http: Http) {
    this.initializeItems();
    this.favorites = [];
  };

  initializeItems() {
    this.http.get('http://superfanlove.herokuapp.com/api/celebrities/tags?query=').map(res => res.json()).subscribe(data => {
      this.allItems = data;
    });
  };

  resetItems() {
    this.items = this.allItems;
  };

  getItems(ev: any) {
    // Reset items back to all of the items
    this.resetItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.text.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.items = [];
    }
  };

  toggleFaves(val) {
    if (this.favorites.indexOf(val) >= 0) {
      this.favorites.splice(this.favorites.indexOf(val), 1);
    } else {
      this.favorites.push(val);
    }
  };

  launchFeed(favorites) {
    this.navCtrl.push(FeedPage, {
      favorites: this.favorites
    });
  };

  clearFeed(favorites) {
    return this.favorites = [];
  };
}
