import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

/*
  Generated class for the XmltojsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class XmltojsProvider {

  constructor(public http: Http) {
    // console.log('Hello XmltojsProvider Provider');
  }
  parseXML(data){
      return new Promise(resolve => {
        var k ,
        arr = [],
        parser = new xml2js.Parser(
          {
             trim: true,
            //  explicitArray: true
          });
    
          parser.parseString(data, function (err, result)
          {
            // console.log(result.rss.channel[0].item[0]);
             var obj = result.rss.channel[0];
             for(k in obj.item)
             {
                var items = obj.item[k];
                arr.push({
                  title           : items.title[0],
                  link        : items.link[0],
                  imageUrl : items.description[0].substring(items.description[0].indexOf("http"),items.description[0].indexOf("width")-2),
                  description : items.description[0].substring(items.description[0].indexOf(">")+1),
                  pubDate        : items.pubDate[0]
                });
             }
    
             resolve(arr);
          });
        })
    }
}
