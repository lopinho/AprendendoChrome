console.log('carregando script.');

// inserindo script na pagina aberta
var s = document.createElement('script');
s.src = chrome.extension.getURL("js/api.js");
document.documentElement.appendChild(s);

var lotePort = chrome.runtime.connect({name: "lote"});
lotePort.onMessage.addListener(function(msg) {
    console.log(msg);
});

var relogioPort = chrome.runtime.connect({name: "relogio"});
relogioPort.onMessage.addListener(function(msg) {
    console.log(msg);
});

var carregaFotosPort = chrome.runtime.connect({name: "carregaFotos"});
carregaFotosPort.onMessage.addListener(function(msg) {
    console.log(msg);
});

document.addEventListener("dataToExtension", function(event) {
    console.log('recebeu');
    var msg = event.detail;
    console.log(msg);

    if(msg.chave === 'lote'){
        lotePort.postMessage(msg.dado);
    }else if(msg.chave === 'relogio'){
        relogioPort.postMessage(msg.dado);

    }else if (msg.chave === 'carregaFotos'){
        carregaFotosPort.postMessage(msg.dado);
    }
});
