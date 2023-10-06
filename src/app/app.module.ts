import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './login/login.component';
import { HomeComponent } from './user.home/home.component';
import { UserAccountComponent } from './user.account/useraccount.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminUsersComponent } from './admin.users/adminusers.component';
import { FormsModule } from '@angular/forms';
import { ModalOutletComponent } from './modal-outlet/modal-outlet.component';
import { PortalDirective } from './portal.directive';
import { AdminBooksComponent } from './admin.books/adminbooks.component';
import { AdminUsers2Component } from './admin.users2/admin.users2.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    UserAccountComponent,
    RegistrationComponent,
    AdminUsersComponent,
    ModalOutletComponent,
    PortalDirective,
    AdminBooksComponent,
    AdminUsers2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
