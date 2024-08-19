import { Component } from '@angular/core';
import { nanoid } from 'nanoid'
import { Book } from '../book';
import { ServiceBookService } from '../service-book.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})


export class BookListComponent {
  books?: Book[];

  constructor(private BookService: ServiceBookService){}

  ngOnInit(): void {
    this.books = this.BookService.getBooks();
  }
  // addBook(){
  // this.books.push({id, title })
  // }
  descriptionView(){
    alert("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, possimus maxime cupiditate vitae in et aperiam fugit dolor unde cumque aspernatur necessitatibus animi hic suscipit quasi illo soluta illum voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam exercitationem odit fugiat perferendis quae cupiditate, beatae sequi harum? Mollitia commodi voluptatem accusantium quibusdam dolorum cupiditate, ex vel. Accusamus, quas ullam")
  }
}

