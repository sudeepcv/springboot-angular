package com.sudeep.TodoApp.controller;


import java.net.URI;
import java.util.List;
import java.util.Optional;

import com.sudeep.TodoApp.model.Todo;
import com.sudeep.TodoApp.service.TodoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class TodoController {
    @Autowired
    TodoService todoService;

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String helloWorld() {
        return "hello";
    }

    @RequestMapping(value = "/basicauth", method = RequestMethod.GET)
    public String basicauth() {
        return "authenticated";
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> todos(@PathVariable String username) {
        List<Todo> todos = todoService.findAll();
        return todos;
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Optional<Todo> todoById(@PathVariable String username, @PathVariable long id) {
        Optional<Todo> todo = todoService.findById(id);  
        return todo;
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodoByid(@PathVariable String username, @PathVariable long id) {
        todoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }


    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
        Todo updatedTodo=todoService.updateTodo(todo,id);
        return new ResponseEntity<Todo>(updatedTodo,HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
        Todo updatedTodo=todoService.saveTodo(todo);
        URI uri= ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(updatedTodo.getId()).toUri();
        return  ResponseEntity.created(uri).build();
    }

}
