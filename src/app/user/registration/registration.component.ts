import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email.validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match.passwords.validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    img: ['', [Validators.pattern(/^https?:\/\//)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  registration(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      img,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService
      .registration(username!, email!, img!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
