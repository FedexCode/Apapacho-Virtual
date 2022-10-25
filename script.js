function mensajeEnviado(){
    document.getElementById("state-message").innerText = "¡¡Apapacho Enviado!!"
}

setTimeout(mensajeEnviado,5000);

setTimeout(function() {
    alert("Recibiste un Apapacho!")
}, 5400)
