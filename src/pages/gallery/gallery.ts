import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media } from '../../providers/media/media';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public mediaService: Media) {

  }

}

