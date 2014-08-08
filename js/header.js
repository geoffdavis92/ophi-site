// ALSAC Folder - Header JavaScript


var cHA = document.createElement("a");
var cHead = document.createElement("header");
var cNav = document.createElement("nav");

function header(){
  document.body.cHead;
  document.body.appendChild(cHead);
  var cH1 = document.createElement("h1");
  cHead.appendChild(cH1);
  var cH1Text = document.createTextNode("Omega Phi");
  cH1.appendChild(cH1Text);
  cH1.setAttribute("id","siteH1");

  //Create Nav Ul
  cHead.appendChild(cNav);
  var nUl = document.createElement("ul");
  cNav.appendChild(nUl);
  nUl.setAttribute("id","navList");

// Create and Link Anchors
var nUlLiA1 = document.createElement("a");
nUl.appendChild(nUlLiA1);
if (document.URL === "file://localhost/Users/papag444/gd.info-redesign/index.html") {
  nUlLiA1.setAttribute("href","../gd.info-redesign/index.html");
  }
else{
  nUlLiA1.setAttribute("href","../index.html");
}
nUlLiA1.setAttribute("id","a1");

var nUlLiA2 = document.createElement("a");
nUl.appendChild(nUlLiA2);
if (document.URL === "file://localhost/Users/papag444/gd.info-redesign/about.html"){
  nUlLiA2.setAttribute("href","../gd.info-redesign/about.html"); //about page
}
else{
  nUlLiA2.setAttribute("href","../about.html");
}
nUlLiA2.setAttribute("id","a2");

var nUlLiA3 = document.createElement("a");
nUl.appendChild(nUlLiA3);
if (document.URL === "file://localhost/Users/papag444/gd.info-redesign/alsac/index.html"){
  nUlLiA3.setAttribute("href","../alsac/index.html");
}
else{
  nUlLiA3.setAttribute("href","../gd.info-redesign/alsac/index.html");
}
nUlLiA3.setAttribute("id","a3");

var nUlLiA4 = document.createElement("a");
nUl.appendChild(nUlLiA4);
if (document.URL === "file://localhost/Users/papag444/gd.info-redesign/portfolio/index.html"){
  nUlLiA4.setAttribute("href","../portfolio/index.html");
}
else{
  nUlLiA4.setAttribute("href","../gd.info-redesign/portfolio/index.html");
}
nUlLiA4.setAttribute("id","a3");

  //Create Li
  var nUlLi1 = document.createElement("li");
  nUlLiA1.appendChild(nUlLi1);
  var nUlLi2 = document.createElement("li");
  nUlLiA2.appendChild(nUlLi2);
  var nUlLi3 = document.createElement("li");
  nUlLiA3.appendChild(nUlLi3);
  var nUlLi4 = document.createElement("li");
  nUlLiA4.appendChild(nUlLi4);


  // Create Anchor Text
  var a1Text = document.createTextNode("Home");
  nUlLi1.appendChild(a1Text);
  var a2Text = document.createTextNode("About");
  nUlLi2.appendChild(a2Text);
  var a3Text = document.createTextNode("Internship");
  nUlLi3.appendChild(a3Text);
  var a4Text = document.createTextNode("Portfolio");
  nUlLi4.appendChild(a4Text);

  function styleNav(){
    // cNav = nav element
    // nUl = ul element

      cNav.style.color = "white";
      cNav.style.fontWeight = "medium";
    }

  function styleH(){
    var getH1 = document.getElementById("siteH1");

    getH1.style.fontSize = "5em";
    getH1.style.marginBottom = "-1.25%";
    getH1.style.marginTop = ".75%";
    // getH1.style.fontFamily = "Droid Serif, Droid Sans Mono, monospace";
    // cHead.style.fontFamily = "Droid Sans, monospace";
    cHead.style.color = "#ffffff";
    cHead.style.width = "100%";
    cHead.style.marginLeft = "0";
    cHead.style.marginRight = "0";
    cHead.style.marginBottom = "2.5%";
    // cHead.style.backgroundColor = "#9D2042";
    cHead.style.textAlign = "center";
    cHead.style.paddingTop = ".25%";
    }

  styleH();
  styleNav();
/* END of HEADER creation */ }
