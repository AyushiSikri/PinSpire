package com.pinspireBackend.pinspireBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePin;

public interface CreatePinRepository extends JpaRepository<CreatePin, Long> {
    List<CreatePin> findAllByUser_Id(Long id);

}