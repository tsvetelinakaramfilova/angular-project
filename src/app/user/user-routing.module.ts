import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../guards/auth.activate';
import { RegistrationComponent } from './registration/registration.component';
import { GuestActivate } from '../guards/guest.activate';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestActivate] },
  { path: 'registration', component: RegistrationComponent, canActivate: [GuestActivate] },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'profile/edit', component: ProfileEditComponent,
    canActivate: [AuthActivate]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
