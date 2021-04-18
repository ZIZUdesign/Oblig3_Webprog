
function validerFilm(velgFilm){
    if ((velgFilm =="" || velgFilm =="Velg film")) {
        document.getElementById("feilFimlValgt").innerHTML= "Du må velge en film ";
        return false;
    }
    else{
        document.getElementById("feilFimlValgt").innerHTML= "";
        return true;
    }
}

function validerFornavn(fornavn){
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if(!ok){
        document.getElementById("feilFornavn").innerHTML= "Fornavnet må bestå av 2 til 20 bokstaver";
        return false;
    }
    else{
        document.getElementById("feilFornavn").innerHTML= "";
        return true;
    }
}// slutt

function validerEtternavn(etternavn){
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    const ok = regexp.test(etternavn);
    if(!ok){
        document.getElementById("feilEtternavn").innerHTML= "Etternavn må bestå av 2 til 20 bokstaver";
        return false;
    }
    else{
        document.getElementById("feilEtternavn").innerHTML= "";
        return true;
    }
}// slutt

function validerAntall(antall) {
    if (isNaN(antall) || antall =="") {
        document.getElementById("feilAntall").innerHTML= "Antall filmer må bestå av tall ";
        return false;
    }
    else{
        document.getElementById("feilAntall").innerHTML= "";
        return true;
    }

}//slutt

function validerTlfNr (tlfNr){

    var tlfnummer = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!(tlfNr.match(tlfnummer))) {
        document.getElementById("feilTLFNR").innerHTML= "Ugyldig telefon nummer ";
        return false;
    }
    else {
        document.getElementById("feilTLFNR").innerHTML= "";
        return true;
    }

}

function validerEpost (epost) {

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!(epost.match(mailformat))) {
        document.getElementById("feilEpost").innerHTML = "Ugyldig epost addresse";
        return false;
    } else {
        document.getElementById("feilEpost").innerHTML = "";
        return true;
    }

}
