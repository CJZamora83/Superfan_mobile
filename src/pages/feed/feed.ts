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
  image: string;
  search: string;
  public data;
  public searchFocused;
  public czechMark;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public feedService: FeedProvider) {
    this.n = 50;
    this.type = 'mostRecent';
    this.searchFocused = false;
    this.czechMark = false;
    this.items = [];
    this.initializeItems();
  };


  initializeItems() {
    this.http.get('http://superfanlove.herokuapp.com/api/celebrities/tags?query=').map(res => res.json()).subscribe(data => {
      if (this.feedService.favorites.length > 0) this.feedService.getFeed(this.n, this.type);
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
      this.czechMark = true;
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
  };

  doInfinite(infiniteScroll) {
    this.getMoreFeed();

    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }

  launchGallery(string){

    this.data = string;

    this.navCtrl.push(GalleryPage, {
      data: this.data
    });
  };

  checkFocus(){
    this.searchFocused = true;
  }

  checkBlur() {
    this.searchFocused = false;
  }

}
