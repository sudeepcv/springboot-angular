import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number
  todo: Todo
  constructor(private todoService: TodoDataService,

    private route: ActivatedRoute, private router: Router) { }
  message = ''

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, '', false, new Date())
    if (this.id != -1) {
      this.getTodo()
    }

  }

  getTodo() {
    // this.id = this.route.snapshot.params['id']
    this.todoService.retriveTodo('sudeep', this.id).subscribe(
      response => { this.todo = response }, error => { console.log("error", error) }
    )
  }

  saveTodo() {
    if (this.id === -1) {
      console.log("inside save to do")

      this.todoService.updateTodo('sudeep', this.id, this.todo).subscribe(
        response => {
          this.message = 'to do updated'
          this.router.navigate(['todos'])
        }, error => { }
      )


    } else {
      console.log("inside update to do")

      this.todoService.saveTodo('sudeep', this.todo).subscribe(
        response => { this.router.navigate(['todos']) },
        error => { }
      )
    }
  }

}
