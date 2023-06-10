function getRealUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.lanzous.com/'+url, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var realurl = xhr.responseXML.getElementByTagName("iframe")[0].getAttribute("src");
      callback(realurl);
    }
  };
  xhr.send();
}