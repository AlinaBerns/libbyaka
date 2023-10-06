import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserAccountComponent } from './user.account/useraccount.component';
import { LogInComponent } from './login/login.component';
import { HomeComponent } from './user.home/home.component';
import { AdminHomeComponent } from './admin.home/admin.home.component';
import { AdminBooksComponent } from './admin.books/adminbooks.component';
import { AdminUsersComponent } from './admin.users/admin.users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

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
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/books', component: AdminBooksComponent },
  { path: 'admin/users', component: AdminUsersComponent },
  {path: 'updateuser', component:UpdateuserComponent},
  {path: 'updatebook', component:UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
