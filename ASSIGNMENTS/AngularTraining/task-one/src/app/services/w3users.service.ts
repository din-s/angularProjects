import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class W3usersService {

  headerOptions ={
    header : new HttpHeaders({
      ///todo
    })
  }
  url="https://www.w3schools.com/angular/customers.php"
  getUsersFromApi(){
    return this.http.get(this.url)
  }


  constructor(
    private http : HttpClient
  ) { }
}
