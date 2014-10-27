
function verificaGoogle(tabId, changeInfo, tab) {
    re = /https?:\/\/(www.)?google\.com.*/

    if( re.test(tab.url)){
        return chrome.pageAction.show(tabId);

    }
}

chrome.tabs.onUpdated.addListener(verificaGoogle);


chrome.runtime.onConnect.addListener(function(port) {
    if(port.name ===  "lote"){
        port.onMessage.addListener(function(msg) {
            console.log("lote recebido.")
            console.log(msg);
        });
    }else if (port.name === "relogio"){
        port.onMessage.addListener(function(msg) {
            console.log("relogio recebido.")
            console.log(msg);
        });
    }else if (port.name === "carregaFoto"){
        port.onMessage.addListener(function(msg) {
            console.log("foto recebido.")
            console.log(msg);
        });
    }
});
