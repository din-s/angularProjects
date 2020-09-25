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
export function checkFirstCharacter( userName : AbstractControl):{[key:string]:any}{
  //debug 
  // console.log('from validator function, = ', userName)
  // validation test
  const startsWith = userName.value.startsWith('@')

  //based on above test return something
  return startsWith ? null : {'doesnotStartsWith':true} 
}

export function checkForUniqueUsername(control : AbstractControl):{[key:string]:any}{
    //get all existing userNames
    if(control.value){
      const rs = new RegistrationService()
      const users = rs.getLocalStorageData()
      const userNames = users.map((user)=>user.userName)

      //***********debug
      console.log('userName = ',control) 
    //perform validation
    const isAlreadyUser = userNames.indexOf(control.value)
    //return on basis of above check 
    return isAlreadyUser > -1 ? {'userAlreadyExist':true} :null
    }
    return null
  }

