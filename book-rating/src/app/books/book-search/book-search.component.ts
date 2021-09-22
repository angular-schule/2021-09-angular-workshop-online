import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');
  results$: Observable<Book[]>

  constructor(private bs: BookStoreService) {
    this.results$ = this.searchControl.valueChanges.pipe(
      filter((value: string) => value.length >= 3),
      debounceTime(300),
      switchMap(term => this.bs.search(term))
    );
  }

  ngOnInit(): void {
  }

}
