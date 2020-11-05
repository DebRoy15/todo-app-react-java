package com.example.demo.todosapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.todosapp.model.Todo;
import com.example.demo.todosapp.service.TodosHardCodeService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
	
	@Autowired
	private TodosHardCodeService todoService;

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
		
	}

}
