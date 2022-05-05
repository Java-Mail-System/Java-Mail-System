package com.example.Mymail;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@SpringBootApplication( exclude = { SecurityAutoConfiguration.class } )
public class MymailApplication {

	public static void main(String[] args) {
		SpringApplication.run(MymailApplication.class, args);
	}


	}
