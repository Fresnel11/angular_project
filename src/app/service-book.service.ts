import { Injectable } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookService {
  books: Book[] = BOOKS
  constructor() { }

  // Méthode de stockage de donnée
  getBooks(): Book[]{
    return this.books
  }
}
