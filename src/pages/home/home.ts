import { Component } from '@angular/core';
import { NgSwitchCase } from '@angular/common';
import { NavController } from 'ionic-angular';
import { Media } from '../../providers/media/media';
import { GalleryPage } from '../gallery/gallery';
import { FeedPage } from '../feed/feed';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data;
  public type;

  constructor(public navCtrl: NavController, public mediaService: Media) {
    mediaService.getTrending();
    mediaService.getMostRecent();
    mediaService.getTwitterHome();
    mediaService.getGramHome();
    mediaService.getTubeHome();
    this.type = "artists";
  }

  launchGallery(string){

    this.data = string;

    this.navCtrl.push(GalleryPage, {
      data: this.data
    });
  }

}
