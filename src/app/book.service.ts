import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'The Silent Patient', author: 'Alex Michaelides', status: 'available', cover: '📚' },
    { id: 2, title: 'Educated', author: 'Tara Westover', status: 'checked-out', cover: '📖' },
    { id: 3, title: 'The Midnight Library', author: 'Matt Haig', status: 'available', cover: '📕' },
    { id: 4, title: 'Klara and the Sun', author: 'Kazuo Ishiguro', status: 'reserved', cover: '📗' }
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }
}