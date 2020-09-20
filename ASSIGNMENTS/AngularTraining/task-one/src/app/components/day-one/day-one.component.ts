import { Component, OnInit } from '@angular/core';
import {  TopicsService } from '../../topics.service'
import { Observable} from 'rxjs'
@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {
  topics : Observable<string[]> = this.ts.getListOfTopics()

  constructor(
    private ts : TopicsService
  ) { }

  ngOnInit(): void {
  }

}
