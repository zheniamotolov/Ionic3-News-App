import {Component, OnInit} from '@angular/core';

import {ModalController} from 'ionic-angular';

import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage implements OnInit {
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.quotesService.fetchQuotes()
      .then(
        (quotes: Quote[]) => this.quotes = quotes
      );

  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();

  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    // this.quotes = this.quotesService.getFavoriteQuotes();
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
