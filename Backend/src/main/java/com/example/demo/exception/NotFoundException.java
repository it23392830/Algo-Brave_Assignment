package com.example.demo.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }
}

//our GlobalExceptionHandler catches NotFoundException and 
// returns a 404 Not Found with a JSON body: { "error": "<message>" }

