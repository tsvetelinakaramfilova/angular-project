import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  message: any;
  constructor(private userService: UserService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

  }
}
