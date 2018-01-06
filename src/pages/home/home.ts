import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Media } from '../../providers/media/media';
import { GalleryPage } from '../gallery/gallery';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  public data;
  public active;
  public type;
  public overlayHidden: boolean = true;

  public hideOverlay(event) {
    if (event.target.className === 'my-overlay') this.overlayHidden = true;
  }

  constructor(public navCtrl: NavController, public mediaService: Media) {
    var that = this;
    mediaService.getTrending();
    mediaService.getMostRecent();
    mediaService.getTwitterHome();
    mediaService.getGramHome();
    mediaService.getTubeHome();
    that.type = "artists";
  }

  launchOverlay(obj){
    this.active = obj;
    this.overlayHidden = false;
  }

  launchGallery(string){

    this.data = string;

    this.navCtrl.push(GalleryPage, {
      data: this.data
    });
  }

}
