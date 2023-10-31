import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
  
  
  constructor(){}
  
  ngOnInit() {
    
  }

  title = 'SocialMedia';

  postContent: string = '';

  onSubmit() {
    if (this.postContent.trim() !== '') {
      console.log('Creating a post:', this.postContent);
      this.postContent = '';
    }
  }

}
