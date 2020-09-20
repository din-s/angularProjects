import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { User } from '../models/User'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    //HttpClient gives as helper function 'get' to read from a json file 
    private http: HttpClient
  ) { }

  //using httpClient access the data.json
  getData():Observable<User[]>{
    return this.http.get<User[]>('/assets/data.json')
  }

}
