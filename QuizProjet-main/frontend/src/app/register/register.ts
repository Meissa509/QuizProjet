import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {

  // Initialisation de l'objet utilisateur avec le rôle par défaut
  user = {
    fullName: '',
    email: '',
    password: '',
    role: 'STUDENT' // Rôle par défaut de l'inscription
  };

  // Injection du Router pour gérer les redirections vers les dashboards
  constructor(private router: Router) {}

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    console.log('Données d\'inscription envoyées :', this.user);

    // TODO: Ici, tu ajouteras l'appel à ton service Spring Boot (ex: this.authService.register(this.user))
    // Pour l'instant, on simule une réponse réussie du backend :
    
    const registrationSuccess = true; 

    if (registrationSuccess) {
      alert(`Inscription réussie en tant que ${this.user.role === 'STUDENT' ? 'Étudiant' : 'Évaluateur'} !`);

      // Redirection dynamique vers le bon Dashboard selon le rôle choisi
      if (this.user.role === 'STUDENT') {
        this.router.navigate(['/dashboard-etudiant']);
      } else if (this.user.role === 'EVALUATOR') {
        this.router.navigate(['/dashboard-evaluateur']);
      }
    }
  }
}