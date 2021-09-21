import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter<Book>();
  bookForm: FormGroup;

  constructor() {
    this.bookForm = new FormGroup({
      isbn: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0),
      rating: new FormControl(1),
    });
  }

  ngOnInit(): void {
    // DEBUG
    this.onSubmit();
  }

  onSubmit() {
    this.submitForm.emit({ isbn: 'test' } as Book);
  }

}


/*
  - Validierung
  - Fehleranzeige
  - Button
  - Abschicken
  - Buch erzeugen
  - Event abschicken
  - HTTP
  - wegnavigieren
  - (Autoren)
*/
