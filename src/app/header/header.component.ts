import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logo: string = '../assets/logoipsum-317.svg';
  @Output() passValue = new EventEmitter<boolean>();
  affiche: boolean = false;
  afficheForm() {
    this.affiche = !this.affiche;
    this.passValue.emit(this.affiche)
  }
}

