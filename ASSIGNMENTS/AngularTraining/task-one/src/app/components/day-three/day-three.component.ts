import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl , Validators, AbstractControl } from '@angular/forms';

import { RegistrationService } from '../../services/registration.service'

//importing custom validators
import { checkFirstCharacter , checkForUniqueUsername} from '../../direactives/registration-validation.directive' 


@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.css']
})
export class DayThreeComponent implements OnInit {

  genders = ['Male', 'Female', 'Other']
  registrationForm:FormGroup 
  users
  constructor(
    private fb : FormBuilder,
    private regisService : RegistrationService
  ) { 
    this.createForm()
    this.getUsersFromService()
  }

  onSubmit(){
    console.log('current submission: ',this.registrationForm.value)
    this.regisService.addUser(this.registrationForm.value)
    this.regisService.setDataToLocalStorage()
  }

  createForm(){
    this.registrationForm = this.fb.group({
      userName :['', [Validators.required, checkFirstCharacter,checkForUniqueUsername]],
      emailId: ['', [Validators.required, Validators.email]],
      gender : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(8)]]
    })  
  }

  getUsersFromService(){
    this.users =  this.regisService.getLocalStorageData()
  }

  
  
  //getter to be used for error messages
  get userName () {return this.registrationForm.get('userName')}
  get password() { return this.registrationForm.get('password')}

  ngOnInit(): void {
      this.users = this.regisService.getLocalStorageData()
  }

}
