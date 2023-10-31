import { Component } from '@angular/core';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  user: User = new User({
    userId: 0,
    userName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: ''

  });

  constructor(

   

  ){}
  
  ngOnInit() {
    
  }


  onSubmit(){

  }

}
