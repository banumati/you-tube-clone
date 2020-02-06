import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment-sec',
  templateUrl: './comment-sec.component.html',
  styleUrls: ['./comment-sec.component.css']
})
export class CommentSecComponent implements OnInit {
 public comments =[];
 
  constructor(private _commentSection : CommentsService) { }

  ngOnInit() {
    this.comments=this._commentSection.getComments();
  }

}
