package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class BilletRepository {

    @Autowired
    public JdbcTemplate db;

    public String lagreBillet(Billet billet) {
        String sql = "INSERT INTO Billet (fornavn, etternavn, filmtype, antall, tlfnnr, epost)" +
                " VALUES(?,?, ?,?,?,?,?)";
        try{
            db.update(sql,billet.getForNavn(),billet.getEtterNavn(), billet.getAntall(),
                    billet.getEpost(), billet.getFilmType(), billet.getTlfnnr());
            return "OK";
        }
        catch (Exception e){
            return "Feil";
        }
    }

    public List<Billet> hentAlle() {
        String sql = "SELECT * FROM Billet";
        try{
            List<Billet> alleBilleter = db.query(sql,new BeanPropertyRowMapper(Billet.class));
            return alleBilleter;
        }
        catch (Exception e){
            return null;
        }
    }

    public String slettAlle () {
        String sql = "DELETE FROM Billet";
        try{
            db.update(sql);
            return "OK";
        }
        catch (Exception e){
            return "Feil;";
        }
    }
}
