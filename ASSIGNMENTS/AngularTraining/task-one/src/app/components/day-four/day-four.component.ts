import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

import { checkFirstCharacter } from '../../direactives/registration-validation.directive'
//import service 
import { RegistrationService } from '../../services/registration.service'
@Component({
  selector: 'app-day-four',
  templateUrl: './day-four.component.html',
  styleUrls: ['./day-four.component.css']
})
export class DayFourComponent implements OnInit {

  loginSuccess=''
  formSubmitted=false
  loginForm:FormGroup
  constructor(
    private fb : FormBuilder,
    private service : RegistrationService
  ) {
    this.createForm()
   }

   createForm(){
    this.loginForm = this.fb.group({
      userName:['',[Validators.required, checkFirstCharacter]],
      password:['',[Validators.required]]
    }) 
   }

   get user(){
      return this.loginForm.get('userName')
   }


   checkLoginSuccess( currPassword ){
     return this.loginForm.get('password').value === currPassword
   }
   onSubmit(){
  this.formSubmitted=true

    //  console.log('current form submission', this.loginForm.value)
    const cleanUsername=this.loginForm.get('userName').value.trim()
    const usersData = this.service.getLocalStorageData().map((user)=>{
      const userData ={
        userName:user.userName,
        password:user.password
      }
      return userData
      })
      // console.log('all users',usersData);
      
      const matchingUser = usersData.find((user)=>user.userName === cleanUsername)

      //check weather entered user exist
      if (matchingUser){
        //check for matching password 
        console.log('found mathching user');
        
        if(this.checkLoginSuccess(matchingUser.password)) {
          this.loginSuccess="Loggin successful" 
          localStorage.setItem('loggedInAs',cleanUsername)
          console.log(window.location.pathname='/task-three/dashboard');
        }else{ 
          this.loginForm.setErrors({'noMatchFound':true})
          this.loginSuccess="Login Failure"
          console.log(this.loginForm.errors)
          this.loginForm.statusChanges.subscribe({next:value=>console.log(value)})
          // alert(this.loginSuccess)
        }
      }else{
        this.loginForm.setErrors({'notUserFound':true})
      }

      this.loginForm.patchValue({
        userName:'',
        password:''
      })


    
  }


  get userName(){ return this.loginForm.get('userName')}
  ngOnInit(): void {
    if(localStorage.getItem('loggedInAs')){
      console.log(window.location.pathname='/task-three/dashboard');
    }
    console.log(this.loginForm.errors)
  }

}
