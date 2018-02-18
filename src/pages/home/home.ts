import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Platform } from 'ionic-angular';
import { Media } from '../../providers/media/media';
import { FeedProvider } from '../../providers/feed/feed';
import { GalleryPage } from '../gallery/gallery';
import { Http } from '@angular/http';
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
  items: { text: string, system: string }[];
  allItems: { text: string, system: string }[];
  search: string;

  constructor(public navCtrl: NavController, public mediaService: Media, public plt: Platform, public http: Http, public feedService: FeedProvider) {
    var that = this;
    mediaService.getTrending();
    mediaService.getMostRecent();
    mediaService.getTwitterHome();
    mediaService.getGramHome();
    mediaService.getTubeHome();
    mediaService.getLabeled('music');
    mediaService.getLabeled('athletics');
    mediaService.getLabeled('influencer');
    mediaService.getLabeled('risingstars');
    mediaService.getLabeled('acting');
    mediaService.getLabeled('politics');
    mediaService.getLabeled('fitness');
    that.type = "music";

    console.log('ios? ' + plt.is('ios'));
    console.log('android? ' + plt.is('android'));
    console.log('windows? ' + plt.is('windows'));
    this.initializeItems();
  }

  launchOverlay(obj){
    this.active = obj;
    this.overlayHidden = false;
  }

  resetItems() {
    this.items = this.allItems;
  };

  clear() {
    this.feedService.clear();
  };

  addToFavs(celeb) {
    this.feedService.toggleFavorite(celeb);
    this.search = '';
    this.items = [];
    this.navCtrl.parent.select(1);
  };

  hideOverlay(event) {
    console.log(event.target.className)
    if (event.target.className === 'my-overlay') {
      this.active = false;
      this.overlayHidden = true;
    }
  }

  initializeItems() {
    this.http.get('http://superfanlove.herokuapp.com/api/celebrities/tags?query=').map(res => res.json()).subscribe(data => {
      this.allItems = data;
    });
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

  launchGallery(string){

    this.data = string;

    this.navCtrl.push(GalleryPage, {
      data: this.data
    });
  }

}
