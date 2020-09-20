import { Component, OnInit} from '@angular/core';
import { FormService } from "../../form.service";
import { User } from "../../user";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(
    private fs: FormService
  ) { }
  
  table :User[]

  //handle delete event emitted by row component
  deleteRow(id:number):void{
    console.log(id)
    this.fs.deleteRow(id)
  }
  
  //handle edit event emitted by row component
  /* editRow( id:number ):void{
    console.log('Edit',id) 
    console.log(this.fs.getRowData(id))
  } */

  ngOnInit(): void {
    this.fs.getTableData().subscribe(table => this.table = table)
  }

}
