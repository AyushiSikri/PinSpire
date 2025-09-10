package com.pinspireBackend.pinspireBackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pinspireBackend.pinspireBackend.dbEntity.CreatePin;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePinRequest;
import com.pinspireBackend.pinspireBackend.dbEntity.Profile;
import com.pinspireBackend.pinspireBackend.dbEntity.ProfileDTO;
import com.pinspireBackend.pinspireBackend.dbEntity.User;
import com.pinspireBackend.pinspireBackend.repository.ProfileRepository;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile saveUserProfile(ProfileDTO profileDTO){  
        // User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
//{"fullName","profileImageUrl","about","email","preference","id"})
        Profile profile = new Profile();
        profile.setFullName(profileDTO.getFullName());
        profile.setEmail(profileDTO.getEmail());
        profile.setTagsPreference(profileDTO.getTagsPreference());
        profile.setId(profileDTO.getId());
        if (profileDTO.getAbout() != "") {
            profile.setAbout(profileDTO.getAbout());
        }
        if (profileDTO.getProfileImageUrl() != "") {
            profile.setProfileImageUrl(profileDTO.getProfileImageUrl());
        }
        Profile savedProfile = profileRepository.save(profile);
        return savedProfile;
    }

}
