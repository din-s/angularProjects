import { Directive } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';

//import registration service
import { RegistrationService} from '../services/registration.service'

@Directive({
  selector: '[appRegistrationValidation]'
})
export class RegistrationValidationDirective {

  constructor() { }

}
//debug
// let count =0

//check for @
export function checkFirstCharacter( userName : AbstractControl):{[key:string]:any}{
  //debug 
  // console.log('from validator function, = ', userName)
  // validation test
  const startsWith = userName.value.startsWith('@')

  //based on above test return something
  return startsWith ? null : {'doesnotStartsWith':true} 
}


//check for unique userName
export function checkForUniqueUsername(control : AbstractControl):{[key:string]:any}{
    //get all existing userNames
    const rs = new RegistrationService()
    const users = rs.getLocalStorageData()
    if(control.value && users){
      const userNames =  users.map((user)=>user.userName)
      //***********debug
      // console.log('userName = ',control) 
    //perform validation
    const isAlreadyUser = userNames.indexOf(control.value)
    //return on basis of above check 
    return isAlreadyUser > -1 ? {'userAlreadyExist':true} :null
    }
    return null
  }

//check for Unique Email
  export function checkForUniqueEmail(control : AbstractControl):{[key:string]:any}{
    //get all existing userNames
    const rs = new RegistrationService()
    const users = rs.getLocalStorageData()
    if(control.value && users){
      const userEmailIds =  users.map((user)=>user.emailId)
      //***********debug
      // console.log('userName = ',control) 
    //perform validation
    const isAlreadyUser = userEmailIds.indexOf(control.value)
    //return on basis of above check 
    return isAlreadyUser > -1 ? {'emailAlreadyExist':true} :null
    }
    return null
  }




  
  /**
   *********todo 
   for both mail and userName since their functionality are same I want to have generic validator which will function according to the controls passed eg. 'userName' or 'emailId'
   * 
      when control = userName

      const userNames = users.map(user=>user.userName)

      and when control = emailId

      const userEmailIds = users.map(user=>user.emailId)

   */
