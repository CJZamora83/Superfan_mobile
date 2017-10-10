import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';
import { Media } from '../../providers/media/media';
import { GalleryPage } from '../gallery/gallery';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  n: number;

  public data;


  constructor(public navCtrl: NavController, public navParams: NavParams, public feedService: FeedProvider) {
    this.n = 0;
    feedService.getFeed(this.n);
    setTimeout(() => {
      console.log(feedService.feed);
      console.log(feedService.feed.length);
    }, 2500);

    setTimeout(() => {
      this.getMoreFeed();
    }, 5000);

    setTimeout(() => {
      console.log(feedService.feed);
      console.log(feedService.feed.length);
    }, 7500);
  }

  getMoreFeed() {
    this.n += 50;
    this.feedService.getFeed(this.n);
  }

  launchGallery(string){

    this.data = string;

    this.navCtrl.push(GalleryPage, {
      data: this.data
    });
  }

}
