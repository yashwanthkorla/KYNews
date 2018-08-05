import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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
import {AboutPage} from '../pages/about/about';
import { maincommonPage } from '../pages/maincommon/maincommon';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = maincommonPage ;
  // rootPage:any = AboutPage;

  // pages: Array<{title: string, component: any}>;
  pages: Array<{title: string, value: any}>;
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Top Buzz News', component: TopbuzzPage },      
    //   { title: 'Top TV News', component: ToptvPage },
    //   {title: 'Top Movies Reviews', component: TopmoviesPage },
    //   {title: 'Latest Business News', component: LatestbusinessPage },
    //   {title: 'World News', component: WorldPage},
    //   {title: 'India News', component: IndianewsPage},
    //   {title: 'Tech News', component: TechPage},
    //   {title: 'Cricket News', component: CricketPage},
    //   {title: 'Politics News', component : PoliticsPage},
    //   {title: 'Books News', component: BooksPage},
    //   {title: 'Hockey News',component : HockeyPage},
    //   {title: 'Lifestyle News', component: LifestylePage},
    //   {title: 'South cinema News', component: SouthcinemaPage},
    //   {title: 'Formula one News', component: FonePage},
    //   {title: 'Movies News', component: MoviesPage},
    //   {title: 'Sports News', component: SportsPage},
    //   {title:'Football News', component: FootballPage}
    // ];
    this.pages = [
      { title: 'Top Buzz News', value: 'buzz'},      
      { title: 'Top TV News', value: 'tv' },
      {title: 'Top Movies Reviews', value: 'reviews' },
      {title: 'Latest Business News', value: 'business' },
      {title: 'World News', value: 'world'},
      {title: 'India News', value: 'india'},
      {title: 'Tech News', value: 'tech'},
      {title: 'Cricket News', value: 'cricketnext'},
      {title: 'Politics News', value : 'politics'},
      {title: 'Books News', value: 'books'},
      {title: 'Hockey News',value : 'hockey'},
      {title: 'Lifestyle News', value: 'lifestyle'},
      {title: 'South cinema News', value: 'south-cinema'},
      {title: 'Formula one News', value: 'formula-one'},
      {title: 'Movies News', value: 'movies'},
      {title: 'Sports News', value: 'sports'},
      {title:'Football News', value: 'football'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // let value = page.value;
    this.nav.setRoot(maincommonPage,{page});
  }

  About(){
    this.nav.setRoot(AboutPage);
  }
}
