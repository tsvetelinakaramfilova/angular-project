import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, ProfileComponent, RegistrationComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule { }
