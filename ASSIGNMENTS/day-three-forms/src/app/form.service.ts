import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs'
import { User } from './user'
@Injectable({
  providedIn: 'root'
})
export class FormService {
  table : User[];
  constructor( 
    ) { 
      this.getTableData().subscribe((table)=> this.table = table)
    }
  //setData to localStorage
  setTableData(table:User[]):void{
    if(table){
      localStorage.setItem('table',JSON.stringify(table))
    }
  }

  //addRow to the table
  addTableRow(rowData:User):void{
    this.table.push(rowData)
    this.setTableData(this.table)
  }

  //deleteRow 
  deleteRow(id:number):void{
    const currTable = this.table
    currTable.splice(id,1)
    this.setTableData(currTable)
    
  }

  //getEntire table
  getTableData():Observable<User[]>{
    return of(JSON.parse(localStorage.getItem('table')))
  }

  //getRowdata for individual edit purpose
  /* getRowData(id:number){
    const currTable:User[] = this.getTableData()
    return currTable.filter((row,index)=>index === id)
  } */    

}
