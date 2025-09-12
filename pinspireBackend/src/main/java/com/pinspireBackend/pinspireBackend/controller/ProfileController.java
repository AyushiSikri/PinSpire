package com.pinspireBackend.pinspireBackend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
            Profile savedProfile = profileService.saveUserProfile(profileDto);
            ProfileDTO responseDto = new ProfileDTO();
            responseDto.setId(savedProfile.getUser().getId());
            responseDto.setFullName(savedProfile.getFullName());
            responseDto.setAbout(savedProfile.getAbout());
            responseDto.setProfileImageUrl(savedProfile.getProfileImageUrl());
            responseDto.setEmail(savedProfile.getEmail());
            responseDto.setTagsPreference(savedProfile.getTagsPreference());
            Map<String, Object> response_map = new HashMap<>();

            response_map.put("message", "Successful Profile Created");
            // response_map.put("token", jwtService.generateToken(user.getEmail()));
            response_map.put("profile", responseDto);

            return ResponseEntity.status(HttpStatus.CREATED).body(response_map);

        } catch (Exception e) {
            Map<String, Object> error_response_map = new HashMap<>();

            error_response_map.put("message", "An error occurred during signup");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error_response_map);
        }
    }

    @PostMapping("/get_user_profile")
    public ResponseEntity<Map<String, Object>> getUserProfile(@RequestParam String email) {
        try {
            Profile profile = profileService.getProfile(email);
            ProfileDTO responseDto = new ProfileDTO();
            responseDto.setId(profile.getUser().getId());
            responseDto.setFullName(profile.getFullName());
            responseDto.setAbout(profile.getAbout());
            responseDto.setProfileImageUrl(profile.getProfileImageUrl());
            responseDto.setEmail(profile.getEmail());
            responseDto.setTagsPreference(profile.getTagsPreference());
            Map<String, Object> response_map = new HashMap<>();

            response_map.put("message", "Successful Profile Created");
            // response_map.put("token", jwtService.generateToken(user.getEmail()));
            response_map.put("profile", responseDto);

            return ResponseEntity.status(HttpStatus.CREATED).body(response_map);
        } catch (Exception exp) {
            Map<String, Object> error_response_map = new HashMap<>();
            error_response_map.put("message", exp.getMessage());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error_response_map);
        }
    }

}
