import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from 'src/app/list-todos/list-todos.component';
import { Route } from '@angular/compiler/src/core';
import {API_URL} from './../../app.constands'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`)
  }
  deleteTodo(id, username) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)
  }
  retriveTodo(username, id) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo)
  }

    saveTodo(username,todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo)
  }


}
