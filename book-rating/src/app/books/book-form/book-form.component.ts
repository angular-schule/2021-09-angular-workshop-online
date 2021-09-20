import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
    // DEBUG
    this.onSubmit();
  }

  onSubmit() {
    this.submitForm.emit({ isbn: 'test' } as Book);
  }

}
