import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileInfo } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profile: ProfileInfo = {
    username: '',
    img: '',
    email: '',
    likedRecipes: undefined,
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const { username, img, email, likedRecipes} = this.userService.user!
    this.profile = { username, img, email, likedRecipes};
  }
}
