package com.example.foodiko;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Foodiko", description = "Food Ordering App"))
public class FoodikoApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodikoApplication.class, args);
		System.out.println("\n\tFoodiko Starts Successfully!\n");
	}
	
}
