package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BestilleController {
    @Autowired
    private BestilleRepostory rep;

    @PostMapping("/lagre")
    public void lagreBestille(Bestille innBestille) {

        rep.lagreBestille(innBestille);
    }

    @GetMapping("/skrivUtBilletter")
    public List<Bestille> skrivUtBilletter() {
        return rep.skrivUtBilletter();
    }

    @GetMapping("/slettAlleBilletter")
    public void slettAlleBilletter() {
        rep.slettAlleBilletter();
    }
}
