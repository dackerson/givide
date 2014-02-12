function OpenManager() {
  chrome.tabs.create({url:"manager.html"})
}
document.getElementById("managerBtn").onclick = OpenManager
document.getElementById("newEntryTitle").value = document.title
document.getElementById("newEntryUrl").value = document.URL
