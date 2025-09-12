package com.pinspireBackend.pinspireBackend.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pinspireBackend.pinspireBackend.dbEntity.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
     // Profile findByUser_Id(Long userId);
     Optional<Profile> findByEmail(String email);
}
