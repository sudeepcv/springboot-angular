import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';



export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  message = ''
  todos: Todo[]
  //   [
  //     new Todo(1,'description1',false,new Date()),
  //     new Todo(1,'description2',false,new Date()),
  //     new Todo(1,'description3',false,new Date())
  // ]

  constructor(private todoDataService: TodoDataService, private router:Router) { }

  ngOnInit() {
    this.getAllTodos()
  }

  getAllTodos() {
    this.todoDataService.retriveAllTodos('sudeep').subscribe(
      response => { this.todos = response }, error => { }
    )
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo(id, 'sudeep').subscribe(
      response => {
      this.message = 'delete Successful'
        this.getAllTodos()
      }, error => { }
    )
  }

  updateTodo(id){
  this.router.navigate([`/todos`,id])
  }
  addTodo(){
    this.router.navigate([`/todos`,-1])
  }

}
