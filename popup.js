// chrome.runtime.onMessage.addListener(function(request, sender) {
//   if (request.action == "getSource") {
//     message.innerHTML = request.source;
//   }
// });

function onWindowLoad() {
    var message = document.querySelector('#message'); 
    var xhr = new XMLHttpRequest();
    xhr.responseType = "document";
    var resp;
    xhr.open("GET", "https://students.nyuad.nyu.edu/", true);
    xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {
	    resp = xhr.responseXML;
	    console.log(resp);
	    console.log(DOMtoString(resp));
	    message.innerHTML = DOMtoString(resp);
	}
    }
    xhr.send();
}

window.onload = onWindowLoad;
