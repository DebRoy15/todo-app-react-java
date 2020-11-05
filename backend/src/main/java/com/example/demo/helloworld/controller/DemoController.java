package com.example.demo.helloworld.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.helloworld.model.HelloMessage;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class DemoController {

	@GetMapping("/homepage")
	public HelloMessage showHello() {
		return new HelloMessage("Hello World");
	}

	@GetMapping("/helloworld/name/{name}")
	public HelloMessage showHelloWithPathVariable(@PathVariable String name) {
//		throw new RuntimeException("Something went Wrong");
		return new HelloMessage(String.format("Hello World,%s", name));
	}

}
