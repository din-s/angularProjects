import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'
import { User} from '../models/User'
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title :string = 'read-from-json';

  /* 
  usersData =[
    {fname,lname,dob},
    {fname,lname,dob},
    {fname,lname,dob}
  ] 
  */
  usersData:User[];
  constructor(
    private dataService : DataService,
  ){}

  ngOnInit(){
    this.getUserData()
  }

  getUserData():void{
    
    this.dataService.getData().subscribe(users => this.usersData = users)
  }

}
