import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register';
import { DashboardEtudiant } from './dashboard-etudiant/dashboard-etudiant';
import { DashboardEvaluateur } from './dashboard-evaluateur/dashboard-evaluateur';

// Import pour l'administration (Chemin direct corrigé sans sous-dossier fictif)
import { AdminLayoutComponent } from './features/admin/admin-layout';
import { ManageEtudiantsComponent } from './features/admin/manage-apprenants/manage-apprenants';
import { ManageEvaluateursComponent } from './features/admin/manage-evaluateurs/manage-evaluateurs';
import { AdminStats } from './features/admin/admin-stats/admin-stats';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard-etudiant',
    component: DashboardEtudiant
  },
  {
    path: 'dashboard-evaluateur',
    component: DashboardEvaluateur
  },

  // Configuration du Layout Admin avec la Sidebar
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'stats', pathMatch: 'full' },
      { path: 'stats', component: AdminStats },
      { path: 'etudiants', component: ManageEtudiantsComponent },
      { path: 'evaluateurs', component: ManageEvaluateursComponent }
    ]
  }
];