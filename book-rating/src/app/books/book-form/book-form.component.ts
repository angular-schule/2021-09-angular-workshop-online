import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl(0, Validators.min(0)),
      rating: new FormControl(1, [
        Validators.min(1),
        Validators.max(5)
      ]),
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!control && control.touched && control.invalid;
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!control && control.hasError(errorCode) && control.touched;
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
