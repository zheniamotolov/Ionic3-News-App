import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {IonicStorageModule} from "@ionic/storage"
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {BrowserModule} from '@angular/platform-browser';
import {FavoritesPage} from "../pages/favorites/favorites";
import {LibraryPage} from "../pages/library/library";
import {QuotesPage} from "../pages/quotes/quotes";
import {QuotePage} from "../pages/quote/quote";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesService} from "../services/quotes";
import {SettingsService} from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService,
    StatusBar,
    SplashScreen]
})
export class AppModule {
}
