import { TestBed } from '@angular/core/testing';
import { Book } from './book';

import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  // Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);

    // Isolierter Test
    // service = new BookRatingService();

    book = {
      isbn: '',
      description: '',
      authors: [],
      title: '',
      price: 3,
      rating: 3
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up by one', () => {
    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4); // ===
  });

  it('should rate down by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not rate lower than 1', () => {
    // Arrange
    book.rating = 1;

    // Act
    const ratedBook = service.rateDown(book);

    // Assert
    expect(ratedBook.rating).toBe(1);
  });

  it('should not rate higher than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });
});


