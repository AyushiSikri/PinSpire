package com.pinspireBackend.pinspireBackend.controller;

import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class HomeFeedController {

    @PostMapping("/feed")
    public ResponseEntity<List<String>> getFeedByCategory(@RequestBody List<String> categories) {
        List<String> allImages = new ArrayList<>();

        for (String category : categories) {
            switch (category.toUpperCase()) {
                case "FOOD":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                    ));
                    break;
                case "TRAVEL":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1539650116574-75c0c6d73aeb?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1502780402662-acc01917174e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop"
                    ));
                    break;
                case "ART":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578662015515-f666ba7f4329?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1594736797933-d0d9a58fbc16?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&h=400&fit=crop"
                    ));
                    break;
                case "TECHNOLOGY":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1518709779329-7bf8e3a2dffa?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop"
                    ));
                    break;
                case "MUSIC":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop"
                    ));
                    break;
                case "SPORTS":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1546608235-3c42fd4ac4db?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1594881788631-05b7b3c49c95?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop"
                    ));
                    break;
                case "FASHION":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=400&fit=crop"
                    ));
                    break;
                case "NATURE":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1418065460487-3d7063ed1971?w=600&h=400&fit=crop"
                    ));
                    break;
                case "EDUCATION":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                    ));
                    break;
                case "HEALTH":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=400&fit=crop"
                    ));
                    break;
                default:
                    allImages.addAll(List.of());
            }
        }

        Collections.shuffle(allImages);
        return ResponseEntity.ok(allImages);
    }
}
