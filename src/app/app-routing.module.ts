import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StartpageComponent } from './startpage/startpage.component';
import { BookmenuComponent } from './bookmenu/bookmenu.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'startpage', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  {path:'libMenu', component: StartpageComponent},
  {path: 'bookMenu', component: BookmenuComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
