package com.sudeep.TodoApp.model;

import java.util.Date;

import com.sudeep.TodoApp.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component 
public class TodoLoadData implements ApplicationRunner {

    @Autowired
    TodoRepository todoRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        for(int i=0;i<4;i++){
            Todo todo =new Todo();
            todo.setDescription("description-"+i);
            todo.setDone(true);
            todo.setUsername("sudeep-"+i);
            todo.setTargetDate(new Date());
            todoRepository.save(todo);
        }

	}

}