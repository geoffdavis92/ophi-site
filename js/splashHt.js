// Changes the height of the splash image

function resizeSp(){
  var winH = window.innerHeight;
  var splash = document.getElementById("splash");
  var hdrH = document.getElementById("hdr");
  splash.style.width = 80 + '%';
  var spW = $('#splash').width();
  var spH = $('#splash').height();
  var stW = $('#body').width();
  var newH = 0;

  // console.log(spW + " 1 spW");
  // console.log(stW + " 1 stW");
  var origDim = spW / spH;

  var margin = spW / stW;
  // console.log(margin + " 1 margin");
  margin = margin * 100;
  // console.log(margin + " 2 margin");
  var newW = margin;
  // console.log(newW + " 1 newW");
  var newM = 100 - margin;
  // console.log(newM + " 1 newM");
  newM = newM / 2;
  // console.log(newM + " 2 newM");
  margin = margin + '%';
  // console.log(margin + " 3 margin");
  newM = newM + '%';
  // console.log(newM + " 3 newM");

  // console.log(margin + " FINAL");
  // console.log(newM + " FINAL");

  hdrH = $('#hdr').height();
  newH = winH - hdrH;
  newW = origDim * newW;
  console.log(newW);

  //console.log(winH);
  //console.log(hdrH);
  console.log(newH);

  splash.style.height = newH + "px";
  // splash.style.width = newW;
  splash.style.margin = "0 " + newM + " 0 " + newM;
}
