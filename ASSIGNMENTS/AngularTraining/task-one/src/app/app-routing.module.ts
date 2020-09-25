import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
//navigation components
import { AboutComponent} from './navComponents/about/about.component'
import { ContactComponent} from './navComponents/contact/contact.component'
import { CareersComponent} from './navComponents/careers/careers.component'

//page components
import { DayOneComponent } from "./components/day-one/day-one.component";
import { DayTwoComponent } from "./components/day-two/day-two.component";
import { DayThreeComponent } from './components/day-three/day-three.component'

import { AppComponent } from '../app/app.component'
import { from } from 'rxjs';
const routes: Routes =[
 {path:'task-one' , component:DayOneComponent } ,
 {path:'task-two' , component:DayTwoComponent } ,
 { path :"task-three",component:DayThreeComponent},
 {path:'about' , component:AboutComponent},
 { path:'contact' , component:ContactComponent},
 { path:'careers' , component:CareersComponent},
 {path:'', redirectTo:'day-one', pathMatch:'full'}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { 
}

