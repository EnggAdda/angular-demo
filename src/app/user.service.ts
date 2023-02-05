import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){

   return [{
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email : 'john.doe@gmail.com',


    },{
      id: 2,
      firstName: 'Rahul',
      lastName: 'Singh',
      email : 'rahul.singh@gmail.com',
    },{

      id: 1,
      firstName: 'Navin',
      lastName: 'Singh',
      email : 'Navin.Singh@gmail.com',
    }]
  }
}
