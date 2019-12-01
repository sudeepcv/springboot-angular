package com.sudeep.TodoApp.service;

import java.util.List;
import java.util.Optional;

import com.sudeep.TodoApp.model.Todo;

public interface TodoService {

	List<Todo> findAll();

    void deleteById(long id);

	Optional<Todo> findById(long id);

    Todo updateTodo(Todo todo,long id);

    Todo saveTodo(Todo todo);

}