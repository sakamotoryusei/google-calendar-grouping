chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'calendar.google.com/calendar'},
      })
    ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});