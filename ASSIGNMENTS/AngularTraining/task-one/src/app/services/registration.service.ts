import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid'
import { Observable ,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  users

  //adds user to users array
  addUser(user){
    const newUser ={
      id: uuid(),
      ...user
    }
    this.users.push(newUser)
  }

  //stores users array to localStorage
  setDataToLocalStorage(){
    localStorage.setItem('registeredUsers',JSON.stringify(this.users))
  }

  //get stored users from localStorage
  getLocalStorageData(){
    return JSON.parse(localStorage.getItem('registeredUsers'))
  }

  constructor() { 
    this.users = this.getLocalStorageData() || []
  }
}
