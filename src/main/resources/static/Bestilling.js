

function validerOgLagreBillet() {
    const fornavnOK = validerFornavn($("#fornavn").val());
    const etternavnOK = validerEtternavn($("#etternavn").val());
    const antallOK = validerAntall($("#antallFilmer").val());
    const FilmOK = validerFilm($("#filmSelected").val());
    const TlfnnrOK = validerTlfNr($("#tlfNr").val());
    const EpostOK = validerEpost($("#epost").val());
    if (fornavnOK && etternavnOK && antallOK && FilmOK && TlfnnrOK && EpostOK){
        kjopBillet();
    }
    else {
        $("#feil").text = " Noe gikk galt !!!!!!!!"
    }
}

function kjopBillet (){
    const billet = {
        filmType : $("#filmSelected").val(),
        antall : $("#antallFilmer").val(),
        forNavn : $("#fornavn").val(),
        etterNavn : $("#etternavn").val(),
        tlfnnr : $("#tlfNr").val(),
        epost : $("#epost").val()
    }

    $.post("/lagre", billet, function(){
        hentAlle();
    });

    $("#filmSelected").val(""),
        $("#antallFilmer").val(""),
        $("#fornavn").val(""),
        $("#etternavn").val(""),
        $("#tlfNr").val(""),
        $("#epost").val("")

}

function hentAlle() {

    $.get("/hentAlle", function(Billeter) {
        formaterData(Billeter);
    });
}
function formaterData(Billeter){
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th><th>film</th><th>Antall</th>"+
        "</tr>";
    for (const billet of Billeter){
        ut+="<tr>" +
            "<td>"+billet.forNavn+ "</td>" +
            "<td>"+billet.etterNavn+"</td>" +
            "<td>"+billet.tlfnnr+"</td>"+
            "<td>"+billet.epost+"</td>"+
            "<td>"+billet.filmType+"</td>"+
            "<td>"+billet.antall+"</td>"+
            "</tr>";
    }
    ut += "</table>";
    $("#Billettene").html(ut);
}

function slett(){
    $.get("/slettAlle",function (data){

        hentAlle();
    });

}