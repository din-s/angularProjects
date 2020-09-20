import { Injectable } from '@angular/core';
import { of } from 'rxjs'
import { Todo } from '../todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[]
  constructor(
  ) {
    this.todos = JSON.parse(localStorage.getItem('todos'))
    const store = localStorage.getItem('todos')
    if (!store) localStorage.setItem('todos',JSON.stringify([]))
   }
   
  //get todos from localstorage 
  getTodos():Todo[]{
    return this.todos
  }
  
  setTodos(todos:Todo[]):void{
    const stringyTodos:string = JSON.stringify(todos)
    localStorage.setItem('todos',stringyTodos)
  }

  addTodo(todo:Todo){
    const todos = this.getTodos()
    const newTodo:Todo={
      id:todos.length,
      status:'pending',
      ...todo
    }
    todos.push(newTodo)
    this.setTodos(todos)
  }

  deleteTodo(id:number){
    const todos = this.getTodos()
    const newTodos = todos.filter((todo)=>todo.id !== id)
    this.setTodos(newTodos)
  }

}
