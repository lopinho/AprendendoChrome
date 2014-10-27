// API para enviar dados para o background

function sendDataToExtension(chave, dado) {
    var sendData = new CustomEvent('dataToExtension',{detail: {chave: chave, dado: dado}});
    document.dispatchEvent(sendData);
};

