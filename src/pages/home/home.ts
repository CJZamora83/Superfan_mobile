import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

    this.initializeItems();
  }

  initializeItems() {
    this.http.get('http://superfanlove.herokuapp.com/api/trending').map(res => res.json()).subscribe(data => {
      this.trending = data;
    });
  }
}
