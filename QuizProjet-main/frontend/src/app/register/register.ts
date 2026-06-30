import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  // On crée des variables pour stocker ce que l'utilisateur écrit
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  // Cette fonction s'exécutera quand on cliquera sur le bouton
  onSubmit() {
    if (this.password === this.confirmPassword && this.username && this.email) {
      alert('Inscription réussie ! (Logique de connexion à venir)');
      console.log('Données prêtes à être envoyées :', {
        username: this.username,
        email: this.email,
        password: this.password
      });
    }
  }
}
