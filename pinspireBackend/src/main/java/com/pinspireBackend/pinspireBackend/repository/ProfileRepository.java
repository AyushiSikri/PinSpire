package com.pinspireBackend.pinspireBackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.pinspireBackend.pinspireBackend.dbEntity.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
     // Profile findByUser_Id(Long userId);
}
