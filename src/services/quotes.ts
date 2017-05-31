import {Injectable} from "@angular/core";
import {Quote} from "../data/quote.interface";
import {Storage} from "@ionic/storage";

@Injectable()
export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  constructor(private storage: Storage) {
  };

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    this.storage.set('favoriteQuotes', this.favoriteQuotes)
      .then(

      )
      .catch(
        err => {
          this.favoriteQuotes.splice(this.favoriteQuotes.indexOf(quote), 1);
        }
      )
    //console.log(this.favoriteQuotes);
  }

  fetchQuotes() {
    return this.storage.get('favoriteQuotes')
      .then(
        (favoriteQuotes: Quote[]) => {
          this.favoriteQuotes = favoriteQuotes != null ? favoriteQuotes : [];
          return this.favoriteQuotes;
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      )
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
    this.storage.set('favoriteQuotes', this.favoriteQuotes)
      .then(

      )
      .catch(
        err => {
          console.log(err);
        }
  )
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
