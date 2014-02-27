function OpenManager() {
  chrome.tabs.create({url:"manager.html"});
}
document.getElementById("managerBtn").onclick = OpenManager;
chrome.tabs.getSelected(function(tab){
  document.getElementById("newEntryTitle").value = tab.title;
  document.getElementById("newEntryUrl").value = tab.url;
})
document.getElementById("newEntrySubmit").onclick = function(){
  if (localStorage["entries"] == undefined) {
    localStorage["entries"] = [];
  }
  url = document.getElementById("newEntryUrl").value;
  title = document.getElementById("newEntryTitle").value;
  localStorage["entries"] = {}
  localStorage["entries"][url] = {
    "title": title
  };
};
