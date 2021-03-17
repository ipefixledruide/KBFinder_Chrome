function showDaKB(identifier) {
	kbidentifier=identifier; 
	document.querySelector("#KbId").innerText = "" + kbidentifier + "";
}

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  chrome.tabs.executeScript(tab.id, {
    code: `document.querySelector('meta[name="awa-kb_id"]')['content']`
  }, showDaKB);
});