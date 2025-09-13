package com.pinspireBackend.pinspireBackend.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.pinspireBackend.pinspireBackend.dbEntity.CreatePin;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePinRequest;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePinsResponseDTO;
import com.pinspireBackend.pinspireBackend.dbEntity.User;
import com.pinspireBackend.pinspireBackend.repository.CreatePinRepository;
import com.pinspireBackend.pinspireBackend.repository.UserRepository;

@Service
public class CreatePinService {

    private final CreatePinRepository createPinRepository;
    private final UserRepository userRepository;

    public CreatePinService(CreatePinRepository createPinRepository, UserRepository userRepository) {
        this.createPinRepository = createPinRepository;
        this.userRepository = userRepository;
    }

    public CreatePin registerPin(CreatePinRequest createPinRequest, String imageUrl, Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        CreatePin create = new CreatePin();
        create.setTitle(createPinRequest.getTitle());
        create.setDescription(createPinRequest.getDescription());
        create.setImgUrl(imageUrl);
        create.setTags(createPinRequest.getTags());
        create.setUser(user);
        return createPinRepository.save(create);
    }
    
    public List<String> getCreatedPin(Long id) {
        List<CreatePin> create = createPinRepository.findAllByUser_Id(id);

        List<String> resList = new ArrayList<>();
        for (int i = 0; i < create.size(); i++) {
            resList.add(create.get(i).getImgUrl());
            // CreatePinsResponseDTO resDTO = new CreatePinsResponseDTO();
            // resDTO.setId(create.get(i).getId());
            // resDTO.setDescription(create.get(i).getDescription());
            // resDTO.setTitle(create.get(i).getTitle());
            // resDTO.setTags(create.get(i).getTags());
            // resDTO.setUserId(create.get(i).getUser().getId());
            // resList.add(resDTO);
        }
        return resList;
    }
}
