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

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository repository;

    @InjectMocks
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
