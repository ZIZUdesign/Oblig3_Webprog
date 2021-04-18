package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

public class BilletController {

    @Autowired
    private BilletRepository rep;

    @PostMapping("/lagre")
    public String lagreBillet(Billet innBillet){
        return rep.lagreBillet(innBillet);
    }

    @GetMapping("/hentAlle")
    public List<Billet> hentAlle(){
        return rep.hentAlle();

    }

    public String slettAlle(){
        return rep.slettAlle();
    }
}
