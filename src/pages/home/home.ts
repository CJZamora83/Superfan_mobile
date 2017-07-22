import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor(public navCtrl: NavController) {

  // }

  searchQuery: string = '';
  items: string[];

  constructor(private http: HTTP) {
    this.initializeItems();

    this.http.get('http://superfanlove.herokuapp.com/api/celebrities/tags?query=', {}, {})
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      });
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
