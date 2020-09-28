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
import { DayFourComponent } from './components/day-four/day-four.component'
import { DashboardComponent} from './components/dashboard/dashboard.component'
import { DayFiveComponent} from './components/day-five/day-five.component'

import { AppComponent } from '../app/app.component'
import { from } from 'rxjs';
const routes: Routes =[
 {path:'task-one' , component:DayOneComponent } ,
 {path:'task-two' , component:DayTwoComponent } ,
 {path:'about' , component:AboutComponent},
 { path:'contact' , component:ContactComponent},
 { path:'careers' , component:CareersComponent},
 {path:'task-three/login', component:DayFourComponent},
 {path:'task-three/signup', component:DayThreeComponent},
 {path:'task-three/dashboard', component:DashboardComponent},
 {path:'task-five', component:DayFiveComponent},
 {path:'', redirectTo:'day-one', pathMatch:'full'},
 { path :"task-three", redirectTo:'task-three/login'},
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { 
}

