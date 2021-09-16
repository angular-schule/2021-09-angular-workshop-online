import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() {
    this.books = [
      {
        isbn: '111',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5,
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen']
      },
      {
        isbn: '222',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        price: 32.9,
        rating: 3,
        authors: ['Evan You']
      }
    ];
  }

  // Lifecycle-Hook
  ngOnInit(): void {
  }

}
