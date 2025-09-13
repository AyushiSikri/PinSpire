package com.pinspireBackend.pinspireBackend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePin;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePinRequest;
import com.pinspireBackend.pinspireBackend.dbEntity.CreatePinsResponseDTO;
import com.pinspireBackend.pinspireBackend.service.CloudinaryService;
import com.pinspireBackend.pinspireBackend.service.CreatePinService;

@RestController
@RequestMapping("/api")
public class CreatePinController {

    @Autowired
    private CreatePinService createPinService;
    private final CloudinaryService cloudinaryService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public CreatePinController(CloudinaryService cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }

    // @PostMapping(consumes = "multipart/form-data")
    @PostMapping(value = "/create_pin", consumes = {"multipart/form-data"})
    public ResponseEntity<String> create_pin(
            @RequestPart("file") MultipartFile file,
            @RequestPart("title") String title,
            @RequestPart("description") String description,
            @RequestParam("tags") List<String> tags, @RequestParam("userId") Long userId) {
        try {

            CreatePinRequest req = new CreatePinRequest();
            req.setTitle(title);
            req.setDescription(description);
            // Parse tags from JSON string
            // List<String> tags = objectMapper.readValue(tagsJson, 
            //     objectMapper.getTypeFactory().constructCollectionType(List.class, String.class));

            req.setTags(tags);

            String imageUrl = cloudinaryService.uploadFile(file);
// String imageUrl = "https://via.placeholder.com/300x400.png?text=Test+Image";
            createPinService.registerPin(req, imageUrl, userId);

            return ResponseEntity.ok("Success");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }

    @GetMapping("/get_create_pin")
    public ResponseEntity<Map<String, Object>> getUsersCreatedPin(@RequestParam("id") Long id) {

        try {
            List<String> profile = createPinService.getCreatedPin(id);
            Map<String, Object> response_map = new HashMap<>();

            response_map.put("message", "Successful Profile Created");
            response_map.put("pins", profile);

            return ResponseEntity.status(HttpStatus.CREATED).body(response_map);
        } catch (Exception exp) {
            Map<String, Object> error_response_map = new HashMap<>();
            error_response_map.put("message", exp.getMessage());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error_response_map);
        }
    }
}
