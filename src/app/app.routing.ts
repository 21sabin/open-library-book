import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/index';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { SearchBookComponent } from './components/searchBook/searchBook.component';
import { ProfileComponent } from './components/profile/profile.component';


const app_Routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'searchBook', component: SearchBookComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(app_Routes);