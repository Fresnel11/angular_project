import { Component } from '@angular/core';
import { nanoid } from 'nanoid'


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})


export class BookListComponent {
  name: string = "Fresnel";
  id: string = nanoid()
  title: string = "";
  author: string = "";
  description: string = "";
  statut: boolean = false;

  books = [
    {id: nanoid(), title: "Le vent", author: "Fresnel", description:"Lorem ipsum dolor sit,....", editHome: "Laha Edition", editYear: 2004, statut: "Traitée" },
    {id: nanoid(), title: "Clean code", author: "Robert", description:"Lorem ipsum dolor sit, ....", editHome: "Laha Edition", editYear: 2004, statut: "Traitée"},
    {id: nanoid(), title: "Le programmeur", author: "Jean-Claude", description:"Lorem ipsum dolor sit,...", editHome: "Laha Edition", editYear: 2004, statut: "Traitée"},
    {id: nanoid(), title: "Demon slayer", author: "Tomioka", description:"Lorem ipsum dolor sit,...", editHome: "Laha Edition", editYear: 2004, statut: "Traitée"},
    {id: nanoid(), title: "Kimetsu no Yaiba", author: "Tandjiro", description:"Lorem ipsum dolor sit,...", editHome: "Laha Edition", editYear: 2004, statut: "Traitée"},
  ]

  // addBook(){
  // this.books.push({id, title })
  // }
}

