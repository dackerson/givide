function OpenManager() {
  chrome.tabs.create({url:"manager.html"});
};
document.getElementById("managerBtn").onclick = OpenManager;
chrome.tabs.getSelected(function(tab){
  document.getElementById("newEntryTitle").value = tab.title;
  document.getElementById("newEntryUrl").value = tab.url;
});
document.getElementById("newEntrySubmit").onclick = function(){
  url = document.getElementById("newEntryUrl").value;
  title = document.getElementById("newEntryTitle").value;
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
};
