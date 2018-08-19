$(function(){
  for(name in groups){
    $('#groupBox').append('<button class="group" data-groupname="' + name + '">' + name + '</button>');
  }

  $('.group').click(function(){
    var groupName = $(this).data('groupname');
    var groupUsers = groups[groupName];
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, { file: 'scripts/jquery-3.3.1.min.js' }, function() {
        chrome.tabs.executeScript(tabs[0].id, { code: 'groupUsers = ' + JSON.stringify(groupUsers) }, function() {
          chrome.tabs.executeScript(tabs[0].id, { file: 'scripts/main.js' });
        });
      });
    });
  });
});
