import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';
import { GalleryPage } from '../gallery/gallery';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  n: number;
  type: string;
  items: { text: string, system: string }[];
  allItems: { text: string, system: string }[];
  search: string;
  public data;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public feedService: FeedProvider) {
    this.n = 0;
    this.type = 'mostRecent';
    this.initializeItems();
  };

  initializeItems() {
    this.http.get('http://superfanlove.herokuapp.com/api/celebrities/tags?query=').map(res => res.json()).subscribe(data => {
      this.allItems = data;
    });
  };

  resetItems() {
    this.items = this.allItems;
  };

  clear() {
    this.feedService.clear();
  };

  addToFavs(celeb) {
    if (celeb != '') {
      this.feedService.toggleFavorite(celeb);
      this.search = '';
      this.items = [];
      this.feedService.getFeed(this.n, this.type);
    }
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

  viewFeed() {
    this.navCtrl.parent.select(2);
  }

  getMoreFeed() {
    this.n += 50;
    this.feedService.getFeed(this.n, this.type);
    console.log(this.feedService.feed);
  };

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.getMoreFeed();

    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  launchGallery(string){

    this.data = string;

    this.navCtrl.push(GalleryPage, {
      data: this.data
    });
  };

}
