
function DOMtoString(document_root) {
    var html = '', nodeList = document_root.getElementById('announceContainer');
    var node = nodeList.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
	    if(~node.outerHTML.indexOf('data-announcement-id'))
	    {
		html += node.outerHTML;
	    }
	    if(~node.outerHTML.indexOf('class="announcement"'))
	    {
		var events = node.querySelectorAll('li[class="announcement"]');
		for (var i = 0; i < events.length; ++i)
		{
		    var String=events[i].outerHTML.substring(events[i].outerHTML.indexOf('id="announcement-')+17,events[i].outerHTML.indexOf('id="announcement-')+22);
		    var event = events[i].querySelector('a[href="#"]');
		    html += '<a href="https://students.nyuad.nyu.edu/announcements/' + String + '">' + event.innerHTML + '</a><br>';
		}
	    }
            break;
        }
        node = node.nextSibling;
    }
    return html;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
 
