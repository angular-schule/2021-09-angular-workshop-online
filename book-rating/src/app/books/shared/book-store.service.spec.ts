import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
