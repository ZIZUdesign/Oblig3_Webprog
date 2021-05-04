function submitForm() {
    const bestille = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val(),
        antallFilm: $("#antallFilm").val(),
        valgFilm: $("#valgFilm").val(),
    }
    const RBillet = validation();
    if (!RBillet) {
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
        $("#antallFilm").val("");
        $('#valgFilm').get(0).selectedIndex = 0;

        $.post("/lagre", bestille, function () {
            skrivUtBilletter();
        });
    }


}

function skrivUtBilletter() {
    $.get("/skrivUtBilletter", function (data) {
        formaterData(data);
    });
}


function formaterData(bestiller) {
    console.log(bestiller);
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (let bestille of bestiller) {
        ut += "<tr><td>" + bestille.valgFilm + "</td><td>" + bestille.antallFilm +
            "</td><td>" + bestille.fornavn + "</td><td>" + bestille.etternavn + "</td><td>" +
            bestille.telefonnr + "</td><td>" + bestille.epost + "</td></tr>";
    }
    ut += "</table>";
    $("#antallBillettene").html(ut);
}

function slettAlleBilletter() {
    $.get("/slettAlleBilletter", function (data) {
        antallBillettene = [];
        formaterData(antallBillettene)
    });
}

function validation() {
    $("#fornavnValidation").html("");
    $("#etternavnValidation").html("");
    $("#tlfValidation").html("");
    $("#epostValidation").html("");
    $("#antallValidation").html("");
    let RBillet = false;
    if ($("#fornavn").val() === "") {
        $("#fornavnValidation").html("Må skrive noe inn i fornavnet");
        RBillet = true;
    }
    if ($("#etternavn").val() === "") {
        $("#etternavnValidation").html("Må skrive noe inn i etternavnet");
        RBillet = true;
    }
    if ($("#telefonnr").val() === "") {
        $("#tlfValidation").html("Må skrive noe inn i telefonnr");
        RBillet = true;
    }
    if ($("#epost").val() === "") {
        $("#epostValidation").html("Må skrive noe inn i epost");
        RBillet = true;
    }
    if ($("#antallFilm").val() === "") {
        $("#antallValidation").html("Må skrive noe inn i antallett");
        RBillet = true;
    }
    return RBillet;
}

