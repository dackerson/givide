$("#managerBtn").click(function() {
  chrome.tabs.create({url:"manager.html"});
});
chrome.tabs.getSelected(function(tab) {
  $("#newEntryTitle").val(tab.title);
  $("#newEntryUrl").val(tab.url);
});
$("#newEntrySubmit").click(function() {
  url = $("#newEntryUrl").val();
  title = $("#newEntryTitle").val();
  entriesStr = localStorage["entries"];
  if (entriesStr == undefined) {
    entries = {};
  }
  else {
    entries = JSON.parse(entriesStr);
  }
  entries[url] = title;
  entriesStr = JSON.stringify(entries);
  console.log("Debug -- new value of 'entries' is: " + entriesStr);
  localStorage["entries"] = entriesStr;
});
