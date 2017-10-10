import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media } from '../../providers/media/media';
import { FeedProvider } from '../../providers/feed/feed';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  data: string = '';

  constructor(public navCtrl: NavController, public mediaService: Media, public navParams: NavParams, public feedService: FeedProvider) {

    this.data = navParams.get("data");
    console.log(this.data);

  }

}

