package com.sudeep.TodoApp.repository;

import com.sudeep.TodoApp.model.Todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

}