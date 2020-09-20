import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { FormBuilder } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DayOneComponent } from './components/day-one/day-one.component';
import { DayTwoComponent } from './components/day-two/day-two.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DayOneComponent,
    DayTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
