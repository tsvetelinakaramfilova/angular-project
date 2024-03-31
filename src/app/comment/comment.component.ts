import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';
import { Comments } from '../types/recipe';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comments[] | null = [];
  hasComments: boolean = false
  recipeId: string = ''
  commentForm = this.fb.group({
    descriptionComment: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private userService: UserService, 
    private activeRoute: ActivatedRoute, private apiService: ApiService, 
    private router:Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      this.recipeId = data['recipeId'];

      this.apiService.getComments(this.recipeId).subscribe((comments) => {
          if (Array.isArray(comments)) {
            this.comments = comments;
            this.hasComments = true;
          } else {
            this.comments = [];
          }

          console.log(this.comments)
          console.log(this.hasComments)
      });
    });
  }

  onSubmitComment() {
    if (this.commentForm.invalid) {
      return;
    }

    const { descriptionComment } = this.commentForm.value;

    this.apiService.createComment(this.recipeId!, descriptionComment!)
      .subscribe(() => {
        this.router.navigate(['recipes', this.recipeId]);
        this.commentForm.reset();
      });
  }

  onDeleteComments(idComment: string){
    console.log(idComment)
  }
}
