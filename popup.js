function OpenManager() {
  chrome.tabs.create({url:"manager.html"});
}
document.getElementById("managerBtn").onclick = OpenManager;
chrome.tabs.getSelected(function(tab){
  document.getElementById("newEntryTitle").value = tab.title;
  document.getElementById("newEntryUrl").value = tab.url;
})
