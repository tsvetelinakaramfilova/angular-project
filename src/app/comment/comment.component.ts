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
  userId: string = ''

  commentForm = this.fb.group({
    descriptionComment: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private userService: UserService,
    private activeRoute: ActivatedRoute, private apiService: ApiService,
    private router: Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      this.recipeId = data['recipeId'];
      const { _id } = this.userService.user! || {};

      this.apiService.getComments(this.recipeId).subscribe((comments) => {
        if (Array.isArray(comments)) {
          this.comments = comments;
          this.userId = _id;
          this.hasComments = true;
        } else {
          this.comments = [];
        }
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
        window.location.reload();
        // this.commentForm.reset();
      });
  }

  onDeleteComments(commentId: string) {
    this.apiService.deleteComment(this.recipeId!, commentId!)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
