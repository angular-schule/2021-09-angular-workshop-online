import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateUp(book: Book): Book {
    /*if (book.rating >= 5) {
      return book;
    }*/

    /*let rating = book.rating;
    if (book.rating < 5) {
      rating = book.rating + 1;
    }*/

    return {
      ...book,
      // rating: book.rating < 5 ? book.rating + 1 : book.rating
      // rating
      rating: Math.min(5, book.rating + 1)
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: book.rating > 1 ? book.rating - 1 : book.rating
    }
  }
}