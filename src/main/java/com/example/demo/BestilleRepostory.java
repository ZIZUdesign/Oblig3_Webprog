package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BestilleRepostory {
    @Autowired
    private JdbcTemplate db;

    public void lagreBestille(Bestille innBestille){
        String sql = "INSERT INTO Bestille (valgFilm, antallFilm, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql,innBestille.getValgFilm(), innBestille.getAntallFilm(),innBestille.getFornavn(),innBestille.getEtternavn(),innBestille.getTelefonnr(),innBestille.getEpost());

    }
    public List<Bestille> skrivUtBilletter(){
        String sql = "SELECT * FROM Bestille ORDER BY etternavn";

        List<Bestille> alleBilleter = db.query(sql,new BeanPropertyRowMapper<>(Bestille.class));
        return alleBilleter;
    }
    public void slettAlleBilletter(){
        String sql = "DELETE FROM Bestille";
        db.update(sql);

    }
}
