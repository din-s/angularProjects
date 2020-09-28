import { Component, OnInit } from '@angular/core';

//import services if any
import { W3usersService} from '../../services/w3users.service'



@Component({
  selector: 'app-day-five',
  templateUrl: './day-five.component.html',
  styleUrls: ['./day-five.component.css']
})
export class DayFiveComponent implements OnInit {

  allUsers:Array<Object>;
  subsetOfAllUser:Array<Object>
  lowerLimit=0
  // upperLimit =5 ;
  constructor(
    private userService : W3usersService
  ) { }
  async getFromApi(){
    console.log('getting from API ')
    this.userService.getUsersFromApi().subscribe((x:Object)=>{
      this.allUsers = x.records ;
      this.createSubset()
    })

  }
    

  changeLimits( lowerLimit, upperLimit ?){
    this.lowerLimit = lowerLimit
    // this.upperLimit = upperLimit
    console.log('LL : ', lowerLimit)
    this.createSubset()
  }

  createSubset(){
    this.subsetOfAllUser =[]
    for( let i = 0 ; i <5 ; i++ ){
      this.subsetOfAllUser.push(this.allUsers[this.lowerLimit+i])
    }
  }



  ngOnInit(): void {
    // this.userService.getUsersFromApi().subscribe(x=>this.allUsers = x.records)
    // this.createSubset()
  }

}
