package com.example.demo;

public class Billet {
    int id;
    String filmType;
    int antall;
    String forNavn;
    String etterNavn;
    String tlfnnr;
    String epost;

    public Billet (){

    }

    public Billet(int id, String filmType, int antall, String forNavn,
                  String etterNavn, String tlfnnr, String epost) {
        this.id= id;
        this.filmType = filmType;
        this.antall = antall;
        this.forNavn = forNavn;
        this.etterNavn = etterNavn;
        this.tlfnnr = tlfnnr;
        this.epost = epost;
    }


    public String getFilmType() {
        return filmType;
    }

    public void setFilmType(String filmType) {
        this.filmType = filmType;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getForNavn() {
        return forNavn;
    }

    public void setForNavn(String forNavn) {
        this.forNavn = forNavn;
    }

    public String getEtterNavn() {
        return etterNavn;
    }

    public void setEtterNavn(String etterNavn) {
        this.etterNavn = etterNavn;
    }

    public String getTlfnnr() {
        return tlfnnr;
    }

    public void setTlfnnr(String tlfnnr) {
        this.tlfnnr = tlfnnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public int getId() {
        return id;
    }

    public void setId(String epost) {
        this.id = id;
    }


}//Slutt

