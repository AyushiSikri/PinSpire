package com.pinspireBackend.pinspireBackend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pinspireBackend.pinspireBackend.dbEntity.User;
import com.pinspireBackend.pinspireBackend.dbEntity.ProfileDTO;
import com.pinspireBackend.pinspireBackend.dbEntity.Profile;
import com.pinspireBackend.pinspireBackend.service.ProfileService;

@RestController
@RequestMapping("/api/")
public class ProfileController {

    @Autowired
    private ProfileService profileService;


    @PostMapping("/user_profile")
    public ResponseEntity<Map<String, Object>> userProfile(@RequestBody ProfileDTO profileDto) {
        try {
            Profile getProfileService = profileService.saveUserProfile(profileDto);
            Map<String, Object> response_map = new HashMap<>();

            response_map.put("message", "Successful Profile Created");
            // response_map.put("token", jwtService.generateToken(user.getEmail()));
            response_map.put("profile", getProfileService);

            return ResponseEntity.status(HttpStatus.CREATED).body(response_map);

        } catch (Exception e) {
            Map<String, Object> error_response_map = new HashMap<>();

            error_response_map.put("message", "An error occurred during signup");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error_response_map);
        }
    }

    // @PostMapping("/edit_user_profile")
    // public ResponseEntity<Map<String, Object>> editUserProfile(@RequestBody ProfileDTO profileDto) {
    //     try {
    //         Profile getProfileService = profileService.saveUserProfile(profileDto);
    //         Map<String, Object> response_map = new HashMap<>();

    //         response_map.put("message", "Successful Profile Created");
    //         // response_map.put("token", jwtService.generateToken(user.getEmail()));
    //         response_map.put("profile", getProfileService);

    //         return ResponseEntity.status(HttpStatus.CREATED).body(response_map);

    //     } catch (Exception e) {
    //         Map<String, Object> error_response_map = new HashMap<>();

    //         error_response_map.put("message", "An error occurred during signup");

    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error_response_map);
    //     }
    // }

}
