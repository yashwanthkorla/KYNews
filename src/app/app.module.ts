import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {HttpModule} from '@angular/http'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import {ToptvPage} from '../pages/toptv/toptv';
// import {TopbuzzPage} from '../pages/topbuzz/topbuzz';
// import {BooksPage} from '../pages/books/books';
// import {CricketPage} from '../pages/cricket/cricket';
// import {FonePage} from '../pages/fone/fone';
// import {FootballPage} from '../pages/football/football';
// import {HockeyPage} from '../pages/hockey/hockey';
// import {IndianewsPage} from '../pages/indianews/indianews';
// import {LatestbusinessPage} from '../pages/latestbusiness/latestbusiness';
// import {LifestylePage} from '../pages/lifestyle/lifestyle';
// import {MoviesPage} from '../pages/movies/movies';
// import {PoliticsPage} from '../pages/politics/politics';
// import {SouthcinemaPage} from '../pages/southcinema/southcinema';
// import {SportsPage} from '../pages/sports/sports';
// import {TechPage} from '../pages/tech/tech';
// import {TopmoviesPage} from '../pages/topmovies/topmovies';
// import {WorldPage} from '../pages/world/world';
import { XmltojsProvider } from '../providers/xmltojs/xmltojs';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {CommonPage} from '../pages/common/common';
// import {MorePage} from '../pages/more/more';
import * as $ from 'jquery';
import {AboutPage} from '../pages/about/about';
import {SocialSharing} from '@ionic-native/social-sharing';
import {maincommonPage} from '../pages/maincommon/maincommon';
@NgModule({
  declarations: [
    MyApp,
    maincommonPage,
    CommonPage,
    AboutPage
    // MorePage,
    // ToptvPage,
    // TopmoviesPage,
    // TopbuzzPage,
    // BooksPage,
    // CricketPage,
    // FonePage,
    // FootballPage,
    // HockeyPage,
    // IndianewsPage,
    // LatestbusinessPage,
    // LifestylePage,
    // MoviesPage,
    // PoliticsPage,
    // SouthcinemaPage,
    // SportsPage,
    // TechPage,
    // WorldPage,
    // CommonPage,
    // AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    maincommonPage,
    CommonPage,
    AboutPage
    // ToptvPage,
    // MorePage,
    // TopmoviesPage,
    // TopbuzzPage,
    // BooksPage,
    // CricketPage,
    // FonePage,
    // FootballPage,
    // HockeyPage,
    // IndianewsPage,
    // LatestbusinessPage,
    // LifestylePage,
    // MoviesPage,
    // PoliticsPage,
    // SouthcinemaPage,
    // SportsPage,
    // TechPage,
    // WorldPage,
    // CommonPage,
    // AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    XmltojsProvider
  ]
})
export class AppModule {}
