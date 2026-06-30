import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { Register } from './register/register';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    children: [
      {
        path: 'questionnaires',
        loadComponent: () => import('./features/questionnaire/questionnaire-list/questionnaire-list').then(m => m.QuestionnaireListComponent)
      },
      {
        path: 'questionnaires/nouveau',
        loadComponent: () => import('./features/questionnaire/questionnaire-form/questionnaire-form').then(m => m.QuestionnaireFormComponent)
      },
      {
        path: 'questionnaires/modifier/:id',
        loadComponent: () => import('./features/questionnaire/questionnaire-form/questionnaire-form').then(m => m.QuestionnaireFormComponent)
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];