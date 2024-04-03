import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileInfo } from 'src/app/types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  likeListLength: boolean = true;
  profile: ProfileInfo = {
    username: '',
    img: '',
    email: '',
    likedRecipes: undefined,
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const { username, img, email, likedRecipes } = this.userService.user!;
    this.profile = { username, img, email, likedRecipes };

    if (Array.isArray(this.profile.likedRecipes) && this.profile.likedRecipes.length <= 0) {
      this.likeListLength = false;
    } 
  }
}
