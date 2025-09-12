package com.pinspireBackend.pinspireBackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pinspireBackend.pinspireBackend.dbEntity.CreatePin;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePinRequest;
import com.pinspireBackend.pinspireBackend.dbEntity.Profile;
import com.pinspireBackend.pinspireBackend.dbEntity.ProfileDTO;
import com.pinspireBackend.pinspireBackend.dbEntity.User;
import com.pinspireBackend.pinspireBackend.repository.ProfileRepository;
import com.pinspireBackend.pinspireBackend.repository.UserRepository;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;
    @Autowired
    private UserRepository userRepository;

    public Profile saveUserProfile(ProfileDTO profileDTO) {
        // User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
//{"fullName","profileImageUrl","about","email","preference","id"})

        User user = userRepository.findById(profileDTO.getId()).orElseThrow(() -> new RuntimeException("User not found with id: " + profileDTO.getId()));
        Profile profile = new Profile();
        profile.setUser(user);
        profile.setFullName(profileDTO.getFullName());
        profile.setEmail(profileDTO.getEmail());
        profile.setTagsPreference(profileDTO.getTagsPreference());
        // profile.setId(profileDTO.getId());

        if (profileDTO.getAbout() != "") {
            profile.setAbout(profileDTO.getAbout());
        }
        if (profileDTO.getProfileImageUrl() != "") {
            profile.setProfileImageUrl(profileDTO.getProfileImageUrl());
        }
        Profile savedProfile = profileRepository.save(profile);
        return savedProfile;
    }

    public Profile getProfile(String email) {
        return profileRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found with email: " + email));
    }

}
