import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {
  colors=['red','lightgreen','violet','blue','yellow']
  para=[1,2,3,4]
  defaultColor:string=this.colors[1]
  selectorForm:FormGroup

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.selectorForm = this.fb.group({
      choice:this.defaultColor
    })
  }

  mouseOver(e):void{
    e.target.style.backgroundColor = this.selectorForm.value.choice
  }
  mouseOut(e):void{
    e.target.style.backgroundColor="white"
  }


}
