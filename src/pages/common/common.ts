import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {SocialSharing} from '@ionic-native/social-sharing';
/**
 * Generated class for the CommonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-common',
  templateUrl: 'common.html',
})
export class CommonPage {
item:any;
  constructor(public navCtrl: NavController,private toastCtrl:ToastController,private social:SocialSharing, public navParams: NavParams,private inapp : InAppBrowser) {
   this.item = this.navParams.get('item');
  }

  browser(link){
  
    let a = this.inapp.create(link,'_self',{mediaPlaybackRequiresUserAction:'yes'});
  }
back(){
  this.navCtrl.pop();
}
share(){

  this.social.share(this.item.title + '-To know more news install our app',this.item.title,'','http://www.techyknights.com/p/ky-news.html').then(() => {
    // this.message("Share successful");
  }).catch((err) => {
    this.message("This feature is not supported in your device");
  })
}
message(message){
  let toast = this.toastCtrl.create({
    message : message,
    position : "bottom",
    duration : 3000
  });
  toast.present();
}
}
