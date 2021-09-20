import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '../shared/book';

/**
 * Shows a book as a card with rating buttons.
 *
 * ### Example
 * ```html
 * <br-book [book]="book"></br-book>
 * ```
 */
@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input() book?: Book;
  /** Emits a book when user clicks "+" button */
  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();
  @Output() deleteBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  doDeleteBook() {
    this.deleteBook.emit(this.book);
  }

  log() {
    // console.log('CD', Date.now());
  }

}
