import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './login/login.component';
import { HomeComponent } from './user.home/home.component';
import { UserAccountComponent } from './user.account/useraccount.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminHomeComponent } from './admin.home/admin.home.component';
import { FormsModule } from '@angular/forms';
import { ModalOutletComponent } from './modal-outlet/modal-outlet.component';
import { PortalDirective } from './portal.directive';
import { AdminBooksComponent } from './admin.books/adminbooks.component';
import { AdminUsersComponent } from './admin.users/admin.users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    UserAccountComponent,
    RegistrationComponent,
    AdminHomeComponent,
    ModalOutletComponent,
    PortalDirective,
    AdminBooksComponent,
    AdminUsersComponent,
    UpdateuserComponent,
    UpdatebookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
