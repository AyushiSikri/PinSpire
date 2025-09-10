package com.pinspireBackend.pinspireBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import java.util.Optional;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePin;

public interface CreatePinRepository extends JpaRepository<CreatePin, Long> {

}