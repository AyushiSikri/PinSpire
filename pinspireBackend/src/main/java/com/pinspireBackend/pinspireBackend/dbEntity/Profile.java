package com.pinspireBackend.pinspireBackend.dbEntity;

import jakarta.persistence.*;
import java.util.*;

@Entity
@Table(name = "user_profile")
public class Profile {

    @Id
    @Column(nullable = false)
    private Long id;
    @Column(nullable = false)
    private String fullName;
    private String about; // optional
    private String profileImageUrl; // optional
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private List<String> tagsPreference;

    @OneToOne
    @MapsId   // this makes user_id also the primary key
    @JoinColumn(name = "user_id")
    private User user;

    // Constructors
    public Profile() {
    }

    public Profile(User user) {
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
