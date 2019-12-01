package com.sudeep.TodoApp.service;

import java.util.List;
import java.util.Optional;

import com.sudeep.TodoApp.model.Todo;
import com.sudeep.TodoApp.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    TodoRepository todoRepository;

    @Override
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    @Override
    public void deleteById(long id) {
         todoRepository.deleteById(id);
    }

    @Override
    public Optional<Todo> findById(long id) {
        return todoRepository.findById(id);
    }

    @Override
    public Todo updateTodo(Todo todo,long id) {
        Optional<Todo> isSavedTodo = todoRepository.findById(id);
        if(isSavedTodo.isPresent()){
                    Todo savedTodo=isSavedTodo.get();
        savedTodo.setDescription(todo.getDescription());
        savedTodo.setTargetDate(todo.getTargetDate());
        Todo updatedTodo = todoRepository.save(savedTodo);
        return updatedTodo;
        }else{
            System.out.println("id with:"+id +" not available on the server");
            return new Todo();
        }


    }

    @Override
    public Todo saveTodo(Todo todo) {
        return todoRepository.save(todo);
    }

}