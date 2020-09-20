import { Component, OnInit } from '@angular/core';
import {  FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms'
import { FormService } from '../../form.service';
import { User } from "../../user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  tableData:User[]
  constructor(
    private formService : FormService,
    private fb: FormBuilder
    ){
      this.tableData;
    }
    
    ngOnInit(): void {
      this.formService.getTableData().subscribe(table=>this.tableData = table)    
    }
  //create form model using formBuilder
  profileForm= this.fb.group({
    id:[this.generateId(),[this.ValidateId.bind(this)]],
    fullName: this.fb.group({
      firstName: ['',Validators.required],
      middleName: [''],
      lastName: ['',Validators.required]
    }),
    gender: new FormControl('')
  })


  
  //handle submit
  onSubmit(){
    //get the data from view and using service store in localstorage
    this.formService.addTableRow(this.profileForm.value)
    this.profileForm.patchValue({
      id:this.generateId(),
      gender:'',
      fullName:{
        firstName:'',
        middleName:'',
        lastName:''
      }
    })
  }

  //validate id
  ValidateId(control: AbstractControl): {[key: string]: any} | null  {
    if (control.value) {
      if(this.tableData){
        console.log(this.tableData);
        
        const ids = this.tableData.reduce((ids,row)=>{
          ids.push(row.id)
          return ids
        },[])
  
        if(ids.indexOf(control.value) !== -1 )
          return { 'IdNotUnique': true };   
      }
    }
    return null;
  }

  generateId(){
    // const table = this.formService.getTableData()
    if(this.tableData)
    return this.tableData[this.tableData.length-1].id+1
    return 1
    
    // return Math.floor(Math.random()*100)
  }

  mouseEnter(e):void{
    e.target.classList.remove('light')
    e.target.classList.add('dark')
    console.log(e.target,'in')
  }
  mouseOut(e):void{
    console.log(e.target,'out')
    e.target.parentElement.classList.remove('dark')
    e.target.classList.add('light')

  }


}