function OpenManager() {
  chrome.tabs.create({url:"manager.html"})
}
document.getElementById("managerBtn").onclick=OpenManager
