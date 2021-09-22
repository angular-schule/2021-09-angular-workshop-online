import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { loadBooks } from '../store/book.actions';
import { selectAllBooks } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private store: Store, private rs: BookRatingService, private bs: BookStoreService) {
    this.store.dispatch(loadBooks());

    // TODO: AsyncPipe
    this.store.select(selectAllBooks)
    .subscribe(books => {
      this.books = books;
    },
    err => {
      // Fehlerbehandlung
    });
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

  doDeleteBook(book: Book) {
    this.bs.deleteBook(book.isbn).subscribe(() => {
      // nach dem Löschen: Buchliste aktualisieren
      this.bs.getAll().subscribe(books => {
        this.books = books;
      });
    });
  }

  private updateList(ratedBook: Book) {
    this.books = this.books
      .map(book => book.isbn === ratedBook.isbn ? ratedBook : book);
  }

}
