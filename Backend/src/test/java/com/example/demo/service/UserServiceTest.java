package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.extension.ExtendWith;

//unit tests the userservice 
//Tests UserService logic in isolation without a real database.
// verifies behaviour

@ExtendWith(MockitoExtension.class) //enables Mockito for creating mocks and injecting them
class UserServiceTest {

    @Mock // creates a mock UserRepository
    private UserRepository repository;

    @InjectMocks //creates an instance of UserService and injects the mock repository into it.
    private UserService service;

    @Test
    void getUserById_shouldReturnUser() {
        User user = new User();
        user.setId(1L);
        user.setName("Test");

        when(repository.findById(1L)).thenReturn(Optional.of(user));

        User result = service.getById(1L);

        assertEquals("Test", result.getName());
    }
    //This test verifies that when a user exists in the repository, 
    // UserService.getById returns that user with the correct data.

    @Test
    void deleteUser_shouldCallRepository() {
        User user = new User();
        user.setId(1L);
        user.setName("Test");
        user.setEmail("test@test.com");
        user.setPhone("077");

        when(repository.findById(1L)).thenReturn(Optional.of(user));

        service.delete(1L);

        verify(repository, times(1)).delete(user);
    }

}
//This test validates that when deleting a user, the service finds 
// the user and calls the repository’s delete method exactly once 
// with the correct entity.