import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  constructor(private userService: UserService) { }

  ngOnInit(): void {


    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

  }
}
