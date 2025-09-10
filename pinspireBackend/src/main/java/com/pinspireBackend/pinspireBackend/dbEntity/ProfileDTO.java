package com.pinspireBackend.pinspireBackend.dbEntity;

import java.util.*;

public class ProfileDTO {

    private Long id;
    private String fullName;
    private String about; // optional
    private String profileImageUrl; // optional
    private String email;
    private List<String> tagsPreference;
    private User user;

    // Constructors
    public ProfileDTO() {}

    public ProfileDTO(User user) {
        this.user = user;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getTagsPreference() {
        return tagsPreference;
    }

    public void setTagsPreference(List<String> tagsPreference) {
        this.tagsPreference = tagsPreference;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    
}
