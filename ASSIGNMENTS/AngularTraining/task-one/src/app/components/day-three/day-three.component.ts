import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl , Validators, AbstractControl } from '@angular/forms';

import { RegistrationService } from '../../services/registration.service'

//importing custom validators
import { checkFirstCharacter , checkForUniqueUsername ,checkForUniqueEmail} from '../../direactives/registration-validation.directive' 


@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.css']
})
export class DayThreeComponent implements OnInit {

  genders = ['Male', 'Female', 'Other']
  registrationForm:FormGroup 

  constructor(
    private fb : FormBuilder,
    private regisService : RegistrationService
  ) { 
    this.createForm()
    
  }

  onSubmit(){
    console.log('current submission: ',this.registrationForm.value)
    this.regisService.addUser(this.registrationForm.value)
    this.regisService.setDataToLocalStorage()
  }

  createForm(){
    this.registrationForm = this.fb.group({
      userName :['', [Validators.required, checkFirstCharacter,checkForUniqueUsername]],
      emailId: ['', [Validators.required, Validators.email, checkForUniqueEmail]],
      gender : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(8)]]
    })  
  }

 
  //getter to be used for error messages
  get userName () {return this.registrationForm.get('userName')}
  get password() { return this.registrationForm.get('password')}
  get emailId(){ return this.registrationForm.get('emailId')}
  ngOnInit(): void {

  }

}
