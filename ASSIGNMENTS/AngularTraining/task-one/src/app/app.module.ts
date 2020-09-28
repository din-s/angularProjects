import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { FormBuilder } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DayOneComponent } from './components/day-one/day-one.component';
import { DayTwoComponent } from './components/day-two/day-two.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './navComponents/about/about.component';
import { ContactComponent } from './navComponents/contact/contact.component';
import { CareersComponent } from './navComponents/careers/careers.component';
import { DayThreeComponent } from './components/day-three/day-three.component';
import { RegistrationValidationDirective } from './direactives/registration-validation.directive';
import { DayFourComponent } from './components/day-four/day-four.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DayFiveComponent } from './components/day-five/day-five.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DayOneComponent,
    DayTwoComponent,
    AboutComponent,
    ContactComponent,
    CareersComponent,
    DayThreeComponent,
    RegistrationValidationDirective,
    DayFourComponent,
    DashboardComponent,
    DayFiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
