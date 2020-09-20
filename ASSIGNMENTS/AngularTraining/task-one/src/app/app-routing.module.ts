import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DayOneComponent } from "./components/day-one/day-one.component";
import { DayTwoComponent } from "./components/day-two/day-two.component";
import { AppComponent } from '../app/app.component'
const routes: Routes =[
 {path:'day-one' , component:DayOneComponent } ,
 {path:'day-two' , component:DayTwoComponent } ,
 {path:'', redirectTo:'day-one', pathMatch:'full'}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { 
}

