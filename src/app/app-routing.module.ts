import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserAccountComponent } from './user.account/useraccount.component';
import { LogInComponent } from './login/login.component';
import { HomeComponent } from './user.home/home.component';
import { AdminUsersComponent } from './admin.users/adminusers.component';
import { AdminBooksComponent } from './admin.books/adminbooks.component';

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
  { path: 'user/home', component: HomeComponent },
  { path:'admin/users', component: AdminUsersComponent},
  { path: 'admin/books', component: AdminBooksComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
