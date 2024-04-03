import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { matchPasswordsValidator } from 'src/app/shared/utils/match.passwords.validator';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent {
  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5)]],
    newPassGroup: this.fb.group(
      {
        newPassword: ['', [Validators.required, Validators.minLength(5)]],
        newRePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('newPassword', 'newRePassword')],
      }
    ),
  });

  get newPassGroup() {
    return this.form.get('newPassGroup');
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  changePass(): void {
    if (this.form.invalid) {
      return;
    }

    const { password, newPassGroup: { newPassword, newRePassword } = {} } = this.form.value;

    this.userService
      .changePassword(password!, newPassword!)
      .subscribe(() => {
        this.userService.logout().subscribe(() => {
            this.router.navigate(['/auth/login']);
        });
      });
  }
}
