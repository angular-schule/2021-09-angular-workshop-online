import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }

  ngOnInit(): void {
  }

}
