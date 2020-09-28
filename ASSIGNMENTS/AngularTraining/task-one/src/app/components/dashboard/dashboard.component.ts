import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  logout(){
    localStorage.removeItem('loggedInAs')
    console.log(window.location.pathname='/task-three/login');

  }
  ngOnInit(): void {
  }

}
