package com.example.demo.todosapp.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.todosapp.model.Todo;

@Service
public class TodosHardCodeService {

	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "debtor15", "Learn to code", new Date(), false));
		todos.add(new Todo(++idCounter, "debtor16", "Learn to dance", new Date(), false));
		todos.add(new Todo(++idCounter, "debtor17", "Learn to happy", new Date(), false));
		todos.add(new Todo(++idCounter, "debtor18", "Learn to cook", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}
}
