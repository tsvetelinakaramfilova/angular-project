import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email.validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  profile: ProfileDetails = {
    username: '',
    img: '',
    email: '',
  };

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    const { email, username, img } = this.userService.user!;

    this.profile = {
      email,
      username,
      img
    };
  }

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    img: ['', [Validators.pattern(/^https?:\/\//)]]
  });

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [this.profile.email, [Validators.required, emailValidator(EMAIL_DOMAINS)]],
      username: [this.profile.username, [Validators.required, Validators.minLength(3)]],
      img: [this.profile.img || '', [Validators.pattern(/^https?:\/\//)]]
    });
  }

  editProfile(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      img
    } = this.form.value;

    this.userService
      .updateProfile(username!, email!, img!)
      .subscribe(() => {
        this.router.navigate(['/auth/profile']);
      });
  }
}
