import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StartpageComponent } from './startpage/startpage.component';
import { FormsModule } from '@angular/forms';
import { ModalOutletComponent } from './modal-outlet/modal-outlet.component';
import { PortalDirective } from './portal.directive';
import { BookmenuComponent } from './bookmenu/bookmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    StartpageComponent,
    ModalOutletComponent,
    PortalDirective,
    BookmenuComponent
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
