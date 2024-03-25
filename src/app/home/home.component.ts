import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: any;
  constructor(private userService: UserService, private apiService: ApiService) { }

  // get isLoading(): boolean {
  //   return this.userService.isLogged;
  // }

  ngOnInit(): void {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });  
  }
}
