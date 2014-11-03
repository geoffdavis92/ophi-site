//ALSAC Folder Footer JavaScript

var cFoot = document.createElement("footer");
var cFL = document.createElement("div");
var cFA = document.createElement("a");
var spacer = document.createElement("a");
var cFF = document.createElement("a");


function footer(){
  document.body.cFoot;
  document.body.appendChild(cFoot);

  document.body.cFL;
  cFoot.appendChild(cFL);

  document.body.cFA;
  cFoot.appendChild(cFA).setAttribute("href","../gd.info-redesign/");
  var footLink = document.createTextNode("\251 2014 Omega Phi   ");
  cFA.appendChild(footLink);

  document.body.spacer;
  var spacerNode = document.createTextNode("..........");
  cFoot.appendChild(spacer);
  spacer.appendChild(spacerNode);

  document.body.cFF;
  cFoot.appendChild(cFF).setAttribute("onclick", "feedback()");
  var feedback = document.createTextNode("   Submit Feedback");
  cFF.appendChild(feedback);

    function styleF(){
      // cFoot.style.fontFamily = "Droid Sans, Helvetica, sans-serif";
      cFoot.style.width = "100%";
      cFoot.style.textAlign = "center";
      cFoot.style.marginTop = "1.75%";
      cFL.style.width = "80%";
      cFL.style.height = "2px";
      cFL.style.backgroundColor = "#ddd";
      //cFL.style.borderRadius = "10px";
      cFL.style.marginLeft = "10.1%";
      cFL.style.marginTop = ".75%";
      cFL.style.marginBottom = ".75%";
      spacer.style.color = "transparent";
      cFF.style.cursor = "pointer";
    //  cFA.style.color = "#bbb";
//      cFoot.style.marginLeft = "0%";
    }
    styleF();
}

function feedback(){
  window.open("feedback/index.html", "_blank");
}

//("href","../gd.info-redesign/feedback.html");
