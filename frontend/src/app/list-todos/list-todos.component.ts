import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    new Todo(1,'description1',false,new Date()),
    new Todo(1,'description2',false,new Date()),
    new Todo(1,'description3',false,new Date())
]

  constructor() { }

  ngOnInit() {
  }

}
