import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Platform } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public mediaService: Media, public plt: Platform) {
    var that = this;
    mediaService.getTrending();
    mediaService.getMostRecent();
    mediaService.getTwitterHome();
    mediaService.getGramHome();
    mediaService.getTubeHome();
    that.type = "artists";

    console.log('ios? ' + plt.is('ios'));
    console.log('android? ' + plt.is('android'));
    console.log('windows? ' + plt.is('windows'));
  }

  launchOverlay(obj){
    this.active = obj;
    this.overlayHidden = false;
  }

  hideOverlay(event) {
    console.log(event.target.className)
    if (event.target.className === 'my-overlay') {
      this.active = false;
      this.overlayHidden = true;
    }
  }

  launchGallery(string){

    this.data = string;

    this.navCtrl.push(GalleryPage, {
      data: this.data
    });
  }

}
