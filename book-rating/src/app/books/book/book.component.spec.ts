import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '',
      rating: 3,
      title: '',
      description: '',
      price: 3,
      authors: []
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit rateUp event for doRateUp()', () => {
    let emittedBook: Book | undefined;

    component.rateUp.subscribe(book => {
      emittedBook = book;
    });

    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBe(component.book);
  });
});
