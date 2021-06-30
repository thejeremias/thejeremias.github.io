var tempo = 4;


contagemRegressiva = setInterval(function() {
     
    document.getElementById("contador").innerHTML = tempo + "s";

    if (tempo == 0) {
        document.location = "https://github.com/thejeremias/";
    } else {
        tempo = tempo -1;
    }

}, 1000);