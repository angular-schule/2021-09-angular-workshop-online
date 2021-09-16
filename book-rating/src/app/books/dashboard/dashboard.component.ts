import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor(private rs: BookRatingService) {
    this.books = [
      {
        isbn: '111',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5,
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen']
      },
      {
        isbn: '222',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        price: 32.9,
        rating: 3,
        authors: ['Evan You']
      }
    ];
  }

  // Lifecycle-Hook
  ngOnInit(): void {
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books
      .map(book => book.isbn === ratedBook.isbn ? ratedBook : book);
  }

}
