import { Component ,} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,PopoverController } from 'ionic-angular';
import {XmltojsProvider} from '../../providers/xmltojs/xmltojs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CommonPage} from '../common/common';

@IonicPage()
@Component({
  selector: 'page-maincommon',
  templateUrl: 'maincommon.html',
})
export class maincommonPage {
items:any = [];
ite:any =[];
count:any;
title:any;
len:any;
a:any;
value:any;
pageValue:any;
constructor(public popoverCtrl: PopoverController,public navCtrl: NavController,public loadingCtrl:LoadingController, public navParams: NavParams,public xml2js:XmltojsProvider,private http:Http) {
 this.value = this.navParams.get('page');
//  console.log(this.value['value'])
//  alert(this.value)
if(this.value != undefined){
 this.title = this.value['title'];
 this.pageValue = this.value['value'];
 this.content(this.pageValue)
}
else{
this.title = 'Top Buzz News';
this.pageValue = 'buzz'
this.content('buzz');  
}
}


doInfinite(infiniteScroll) {
setTimeout(() => {
    let remaining = this.ite.length - this.count;
    console.log(remaining);
    this.a = this.count;
    if(remaining == 0){
      infiniteScroll.enable(false);    
    }
    else{
    // if(remaining > 0){
    for (this.count; this.count < this.a + 20; this.count++) {
      this.items.push( this.ite[this.count] );
    }
    console.log(this.count);
  // }
    
  }
    infiniteScroll.complete();
  
},500);
  
}


content(value){
  let loading = this.loadingCtrl.create({
    content:"Loading Data",
    spinner:'dots'
  });
  loading.present();
   this.http.get('http://www.news18.com/rss/'+ value +'.xml').map(res => res.text())
             .subscribe((data)=>
             {
               this.xml2js.parseXML(data)
               .then((data)=>
               {
                 console.log(data);
                 this.ite = data;
                 for(let i=0;i<20;i++){
                    this.items.push(this.ite[i]);
                    this.count = i+1;
                 }
                 
               }).catch(err => {alert(err)});
               loading.dismiss();
             });
}




doRefresh(refresher) {
  this.content(this.pageValue);
  
  setTimeout(() => {
    refresher.complete();
  }, 1000);
}
full(item){
  this.navCtrl.push(CommonPage,{item});
}

ionViewDidLoad(){ 
  
}
}
