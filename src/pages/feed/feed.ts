import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';
import { Media } from '../../providers/media/media';
import { GalleryPage } from '../gallery/gallery';
import { SettingsPage } from '../settings/settings';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  n: number;
  type: string;
  public data;


  constructor(public navCtrl: NavController, public navParams: NavParams, public feedService: FeedProvider) {
    this.n = 0;
    this.type = 'mostRecent';
    feedService.getFeed(this.n, this.type);
  }

  getMoreFeed() {
    this.n += 50;
    this.feedService.getFeed(this.n, this.type);
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
