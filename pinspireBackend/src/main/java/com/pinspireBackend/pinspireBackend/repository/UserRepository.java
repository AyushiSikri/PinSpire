package com.pinspireBackend.pinspireBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.pinspireBackend.pinspireBackend.dbEntity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
      Optional<User> findByPassword(String password); // check if user already exists
}
