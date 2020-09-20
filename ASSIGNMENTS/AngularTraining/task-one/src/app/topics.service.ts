import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(
    private http: HttpClient
  ) { }

  getListOfTopics(): Observable<string[]>{
    return this.http.get<string[]>('/assets/topicsList.json')
  }
}
