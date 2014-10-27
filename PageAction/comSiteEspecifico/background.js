
function verificaGoogle(tabId, changeInfo, tab) {
    re = /https?:\/\/(www.)?google\.com.*/

    if( re.test(tab.url)){
        return chrome.pageAction.show(tabId);

    }
}

chrome.tabs.onUpdated.addListener(verificaGoogle);
