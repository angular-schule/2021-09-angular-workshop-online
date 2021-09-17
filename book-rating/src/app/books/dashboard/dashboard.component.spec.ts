import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock: BookRatingService;

  beforeEach(async () => {
    book = {
      isbn: '',
      title: '',
      rating: 3,
      price: 3,
      description: '',
      authors: []
    };

    ratingMock = {
      rateUp: book => book,
      rateDown: book => book
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        // immer wenn BRS angefordert wird, wird stattdessen ratingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for doRateUp()', () => {
    // Arrange
    const rs = TestBed.inject(BookRatingService);
    // callThrough: Aufruf soll an originales Objekt "rs" durchgeleitet werden
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.doRateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalledTimes(1);
    expect(rs.rateUp).toHaveBeenCalledWith(book);
  });
});
