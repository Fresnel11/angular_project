import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  profileForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl(''),
    mail: new FormControl('', [Validators.required]),
    tel: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
    console.warn(this.profileForm.status);
    
  }

  updateProfile() {
    this.profileForm.setValue({
    nom: 'Charo',
    prenom: 'Niska',
    mail: 'charo@gmail.com',
    tel: '41182306',
    message: "Hello World"
    })
    console.warn(this.profileForm.value);
    
  }
  
}
