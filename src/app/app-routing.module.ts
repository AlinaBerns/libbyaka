import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserAccountComponent } from './user.account/useraccount.component';
import { LogInComponent } from './login/login.component';
import { HomeComponent } from './user.home/home.component';
import { AdminUsersComponent } from './admin.users/adminusers.component';
import { AdminBooksComponent } from './admin.books/adminbooks.component';
import { authGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'login', component: LogInComponent },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'user/account',
    component: UserAccountComponent,
  },
  { path: 'user/home', component: HomeComponent, canActivate: [authGuard], data: { allowedRoles: ['ROLE_USER', 'ROLE_MODERATOR', 'ROLE_ADMIN'] } },
  { path:'admin/users', component: AdminUsersComponent, canActivate: [authGuard], data: { allowedRoles: ['ROLE_ADMIN'] } },
  { path: 'admin/books', component: AdminBooksComponent, canActivate: [authGuard], data: { allowedRoles: ['ROLE_ADMIN'] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
