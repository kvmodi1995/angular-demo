import { Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/auth/role-guard.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  { path: '**', redirectTo: '' }
];
