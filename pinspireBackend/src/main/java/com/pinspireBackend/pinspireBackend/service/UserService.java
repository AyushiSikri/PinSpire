package com.pinspireBackend.pinspireBackend.service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pinspireBackend.pinspireBackend.dbEntity.User;
import com.pinspireBackend.pinspireBackend.dbEntity.UserLogin;
import com.pinspireBackend.pinspireBackend.repository.ProfileRepository;
import com.pinspireBackend.pinspireBackend.repository.UserRepository;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    // @Autowired
    // private SecurityConfig passwordEncoder;
    @Autowired
    private ProfileRepository profileRepository;

    public User registerUser(User user) {
        // check if email already exists
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists!");
        }
        User savedUser =userRepository.save(user);

        // Profile profile = new Profile();
        // profile.setUser(savedUser);
        // profileRepository.save(profile);
        // user.setPassword(passwordEncoder.encode(user.getPassword()));
        return savedUser;
    }

    // public String loginUser(UserLogin user) {
    //     // check if email already exists
    //     if (userRepository.findByEmail(user.getEmail()).isPresent()) {
    //         return "Success";
    //     }
    //    return "Invalid email or password!";
    // }
    //&& userRepository.findByPassword(user.getPassword()).isPresent()

    public boolean loginUser(UserLogin userLogin) {
        try {
            // Find user by email
            Optional<User> userOptional = userRepository.findByEmail(userLogin.getEmail());

            if (userOptional.isPresent()) {
                User user = userOptional.get();
                // TODO: Use password encoder to compare encrypted passwords
                // return passwordEncoder.matches(userLogin.getPassword(), user.getPassword());

                // For now, simple string comparison (NOT SECURE - use password encoder)
                return user.getPassword().equals(userLogin.getPassword());
            }

            return false;
        } catch (Exception e) {
            // Log the error
            System.err.println("Error during login: " + e.getMessage());
            throw new RuntimeException("Login failed due to server error");
        }
    }
}
