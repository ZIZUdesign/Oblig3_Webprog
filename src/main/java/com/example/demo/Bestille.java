package com.example.demo;

public class Bestille {

    public String id;
    public String valgFilm;
    public int antallFilm;
    public String fornavn;
    public String etternavn;
    public String telefonnr;
    public String epost;

    public Bestille(String id, String valgFilm, int antallFilm, String fornavn, String etternavn, String telefonnr, String epost)
    {
        this.id = id;
        this.valgFilm = valgFilm;
        this.antallFilm = antallFilm;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }
    public Bestille(){ };

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public String getValgFilm() {
        return valgFilm;
    }

    public void setValgFilm(String valgFilm) {
        this.valgFilm = valgFilm;
    }

    public int getAntallFilm() {
        return antallFilm;
    }

    public void setAntallFilm(int antallFilm) {
        this.antallFilm = antallFilm;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

}
