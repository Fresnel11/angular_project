import { Component, Input } from '@angular/core';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  @Input() affiche!: boolean;
  id: string = nanoid();
  title: string = '';
  author: string = "";
  editHome: string= "";
  editYear: string= "";
  description: string = "";
  statut: boolean = false;

  setValue() {
    this.title = 'Nancy';
    this

  }
}
