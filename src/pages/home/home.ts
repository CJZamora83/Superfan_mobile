import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media } from '../../providers/media/media';
import { GalleryPage } from '../gallery/gallery';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public mediaService: Media) {

  }

  launchGallery(){

    let data = {
      title: "Test Gallery Nav",
      comment: "Dancing with myself"
    };

    this.navCtrl.push(GalleryPage, data);
  }

}
