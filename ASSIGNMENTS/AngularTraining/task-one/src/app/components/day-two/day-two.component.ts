import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {
  colors=['red','green','violet','blue','yellow']
  para=[1,2,3,4]
  color:string="blue"
  selectorForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.selectorForm = this.fb.group({
      red:[],
      green:[],
      voilet:[]
    })
  }

  mouseOver(e):void{
    // console.log('in',e.target)
    e.target.style.backgroundColor = this.color
  }
  mouseOut(e):void{
    // console.log('out',e.target)
    e.target.style.backgroundColor="white"
  }


}
