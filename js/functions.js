var tempo = 4;

var url = "https://github.com/thejeremias/";

setInterval(function() {
 
    elemento = document.getElementById("contador");
 
    elemento.innerHTML = `${tempo}s`;
    
    if (tempo == 0) {
        document.location = url;
    } else {
        tempo = tempo -1;
    }

}, 1000);




