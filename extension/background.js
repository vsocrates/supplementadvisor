chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlContains: 'www.amazon.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});



// var title;
// chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
//   if(message.method == 'setTitle')
//     title = message.title;
//   else if(message.method == 'getTitle')
//     sendResponse(title);
// });
