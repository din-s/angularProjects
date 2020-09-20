import { Component } from '@angular/core';
import words from '../utils/words'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  limit:number =5
  words:string =''
  randomWord:string=''

  handleSlideChange(newLimit: number){
    this.limit = newLimit
  }

  generate(){
    this.words = words.slice(0,this.limit).join(' ')
    console.log(this.words)
  }

  generateRandom(){
    const random = Math.floor(Math.random()*this.limit)
    this.randomWord = words[random]
  }
}
