package com.pinspireBackend.pinspireBackend.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
                            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1593504049359-74330189a345?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1606787366850-de6ba128c95e?w=600&h=400&fit=crop"));
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
                            "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1504457047772-da17bf13205d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1564508810860-e6f7b36b4eb2?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1546436836-07a91091f160?w=600&h=400&fit=crop"));
                    break;
                case "ART":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578662015515-f666ba7f4329?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1594736797933-d0d9a58fbc16?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1572297608395-20e80c3ab72c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571115764595-644308ad775f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1577720643271-6760b62d2d3b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578662015515-f666ba7f4329?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1594736797933-d0d9a58fbc16?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1576089776634-cf7aa8a59b0a?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1541308609046-46d2306c3638?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1572471393030-e8dd067d8ee7?w=600&h=400&fit=crop"));
                    break;
                case "TECHNOLOGY":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1518709779329-7bf8e3a2dffa?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1593376853899-fdf509ba446c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1581093458791-9d42e000aa07?w=600&h=400&fit=crop"));
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
                            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1583298817143-13e1a9ee8b61?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571173069043-c5ab8a0bd3a9?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1486092642310-0b5efb3c95c7?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1576615835143-67bf1b2e8f8d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1544034450-ec98c3a1b20c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571263010142-97d3a1f83c2e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=600&h=400&fit=crop"));
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
                            "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1588417424035-bb6c5e1b2e78?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1578928676784-0c6c5adffdad?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1594736797933-d0d9a58fbc16?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1586953208869-a1dacc14830f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1594881778171-b2093aceb65c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1574764053036-ac31800b3b62?w=600&h=400&fit=crop"));
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
                            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1583288650481-32db91af7b3c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop"));
                    break;
                case "NATURE":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1418065460487-3d7063ed1971?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1506760985394-f59ad0a60065?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1535638307770-d9f2c1d80d7f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"));
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
                            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1606027216236-3b066ba5d58c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1574635073071-d8b25c4fcd52?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop"));
                    break;
                case "HEALTH":
                    allImages.addAll(List.of(
                            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1506629905740-8cd797b4c8d2?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1582560469781-1845b622bda0?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
                            "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop"));
                    break;
                default:
                    allImages.addAll(List.of());
            }
        }

        Collections.shuffle(allImages);
        return ResponseEntity.ok(allImages);
    }
}
