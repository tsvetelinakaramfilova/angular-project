import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

  profile: ProfileDetails = {
    username: '',
    img: '',
    email: '',
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const { username, img, email } = this.userService.user!

    this.profile = {
      username,
      img: img || "../../../../assets/Logo_f.png",
      email,
    };
  }
}
