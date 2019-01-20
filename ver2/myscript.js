function onMenuElemClick(obj) {
  var parent = document.getElementById("content");
  for (var i = 0; i < parent.childNodes.length; i++) {
    if (parent.childNodes[i].className == 'content_form') {
      parent.childNodes[i].style.visibility = 'hidden';
      parent.childNodes[i].style.position = 'absolute';
      parent.childNodes[i].style.position.top = '0';
    }
  }
  for (var i = 0; i < parent.childNodes.length; i++) {
    if (parent.childNodes[i].id == obj) {
      parent.childNodes[i].style.visibility = 'visible';
      parent.childNodes[i].style.position = 'static';
    }
  }
}

function ModalWindow(type) {
  if (document.getElementById("modal").style.visibility == "hidden") {
    document.getElementById("modal").style.visibility = "visible";
    for (var i = 0; i < document.getElementById("modal").childNodes.length; i++) {
      if (document.getElementById("modal").childNodes[i].className == 'modal_content') {
        document.getElementById("modal").childNodes[i].style.visibility = 'hidden';
      }
    }
    document.getElementById(type).style.visibility = 'visible';
  } else {
    document.getElementById("modal").style.visibility = "hidden";
    document.getElementById(type).style.visibility = 'hidden';
  }
}