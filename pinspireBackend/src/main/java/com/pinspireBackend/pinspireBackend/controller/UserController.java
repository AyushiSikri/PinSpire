package com.pinspireBackend.pinspireBackend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pinspireBackend.pinspireBackend.JwtService;
import com.pinspireBackend.pinspireBackend.dbEntity.User;
import com.pinspireBackend.pinspireBackend.dbEntity.UserLogin;
import com.pinspireBackend.pinspireBackend.service.UserService;

// @CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signup(@RequestBody User user) {
        try {
            User getUserService = userService.registerUser(user);
            Map<String, Object> response_map = new HashMap<>();

            response_map.put("message", "Successful Sign Up");
            response_map.put("token", jwtService.generateToken(user.getEmail()));
            response_map.put("user", getUserService);

            return ResponseEntity.status(HttpStatus.CREATED).body(response_map);

        } catch (Exception e) {
            Map<String, Object> error_response_map = new HashMap<>();

            error_response_map.put("message", "An error occurred during signup");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error_response_map);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserLogin userLogin) {
        try {
            User user = userService.loginUser(userLogin);
            Map<String, Object> response_map = new HashMap<>();

            if (user != null) {
                response_map.put("message", "Success");
                response_map.put("token", jwtService.generateToken(userLogin.getEmail()));

                // Return user object (but exclude password!)
                Map<String, Object> userData = new HashMap<>();
                userData.put("id", user.getId());
                userData.put("name", user.getName());
                userData.put("email", user.getEmail());

                response_map.put("user", userData);

                return ResponseEntity.ok(response_map);
            } else {
                response_map.put("message", "Invalid email or password!");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response_map);
            }
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "An error occurred during login");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
    
    @GetMapping("/hello") // test API
    public String hello() {
        return "Hello from backend!";
    }

}
