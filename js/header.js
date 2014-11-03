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
      var ul = document.createElement("ul");
      cNav.appendChild(ul);
      ul.setAttribute("id","navList");

    // Create and Link Anchors
    var a1 = document.createElement("a");
    ul.appendChild(a1);
    a1.setAttribute("href","index.html");
    a1.setAttribute("id","a1");

    var a2 = document.createElement("a");
    ul.appendChild(a2);
      a2.setAttribute("href","about.html");
    a2.setAttribute("id","a2");

    var a3 = document.createElement("a");
    ul.appendChild(a3);
      a3.setAttribute("href","members.html");
    a3.setAttribute("id","a3");

    var a4 = document.createElement("a");
    ul.appendChild(a4);
      a4.setAttribute("href","activities.html");
    a4.setAttribute("id","a4");

    var a5 = document.createElement("a");
    ul.appendChild(a5);
      a5.setAttribute("href","service.html");
    a5.setAttribute("id","a5");

      //Create Li
      var li1 = document.createElement("li");
      a1.appendChild(li1);
      var li2 = document.createElement("li");
      a2.appendChild(li2);
      var li3 = document.createElement("li");
      a3.appendChild(li3);
      var li4 = document.createElement("li");
      a4.appendChild(li4);
      var li5 = document.createElement("li");
      a5.appendChild(li5);


      // Create Anchor Text
      var a1Text = document.createTextNode("Home");
      li1.appendChild(a1Text);
      var a2Text = document.createTextNode("About");
      li2.appendChild(a2Text);
      var a3Text = document.createTextNode("Membership");
      li3.appendChild(a3Text);
      var a4Text = document.createTextNode("Activities");
      li4.appendChild(a4Text);
      var a5Text = document.createTextNode("Service");
      li5.appendChild(a5Text);

      function styleNav(){
        // cNav = nav element
        // ul = ul element

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
        // cHead.style.marginBottom = "2.5%";
        // cHead.style.backgroundColor = "#9D2042";
        cHead.style.textAlign = "center";
      }

      styleH();
      styleNav();
}
    /* END of HEADER creation */
