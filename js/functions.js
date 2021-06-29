var tempo = 4;


contagemRegressiva = setInterval(function() {
     
    document.getElementById("contador").innerHTML = tempo + "s";

    if (tempo == 0) {
        clearInterval(this);
        document.location = "https://github.com/thejeremias/";  
    } else {
        tempo = tempo -1;
    }

}, 1000); 