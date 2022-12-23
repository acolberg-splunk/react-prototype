import "./styles.scss";

import React from "react";
      import ReactDOM from "react-dom";

      import App from "./App";

      const monogram = document.getElementById("monogram");
      //const accordion = document.getElementById("accordion");
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        monogram

      );




//document.getElementById("app").innerHTML = ` `;
/* Resize the browser to 1024px to see the first breakpoint, the second breakpoint is at 600px*/
var supportsES6 = (function () {
  // https://gist.github.com/bendc/d7f3dbc83d0f65ca0433caf90378cd95
  try {
    new Function("(a = 0) => a");
    return true;
  } catch (err) {
    return false;
  }
})();

// Reports current viewport width and font-size
function reporting(reportId, w, d) {
  //"use strict";
  if (!supportsES6) return false;

  const report = d.getElementById(reportId);
  if (!report) return false;
  const height = window.innerHeight;
  const width = w.innerWidth;
  const fontSize = w
    .getComputedStyle(report, null)
    .getPropertyValue("font-size");

  report.innerHTML = `Current font-size: <i>${fontSize} @ ${parseInt(
    width,
    10
  )}px x ${height}px  </i> viewport width`;

  w.requestAnimationFrame(function () {
    reporting(reportId, w, d);
  });
}

reporting("report1", window, document);

var closer = document.querySelector(".closer");

var renderTitles = function (dtTitle, node) {
  node.innerHTML = dtTitle;
};

//var dtTitle = "A Long Title " + ;
var x = document.getElementsByClassName("dt-title");

var i;
for (i = 0; i < x.length; i++) {
  var dtTitle = "A Long Title " + i;
  renderTitles(dtTitle, x[i]);
}

var renderDesc = function (dtDesc, node) {
  node.innerHTML = dtDesc;
};

var dtDesc = "Some Description that is long and wraps to at least two lines";
var y = document.getElementsByClassName("dt-desc");

for (i = 0; i < y.length; i++) {
  renderDesc(dtDesc, y[i]);
}
var home = document.querySelector("#nav-toggle:not(.wrapper)");
var close = document.querySelector(".close");
var sideNav = document.querySelector(".side-nav");
var mainContent = document.querySelector(".wrapper");

var wrapper = document.querySelector(".wrapper:not(#nav-toggle)");

//var workspaces = document.querySelectorAll(".workspace");

//var preview = document.querySelector(".workspace-preview");

//var pt = document.querySelector("preview-title");

/*for (i = 0; i < workspaces.length; i++) {
  workspaces[i].addEventListener("mouseover", function () {
    //[].forEach.call(workspaces, function(preview) {
    //if(preview.classList.contains("hidden")){
    //for (i = 0; i < workspaces.length; ++i) {
    //pt.innerHTML = "Hello" + i;
    preview.classList.remove("hidden");

    //};
  });
}
for (i = 0; i < workspaces.length; i++) {
  workspaces[i].addEventListener("mouseout", function () {
    preview.classList.add("hidden");
  });
}
wrapper.addEventListener("click", function (event) {
  //alert("wrapper:" + sideNav.classList)
  if (sideNav.classList.contains("js-not-hidden")) {
    sideNav.classList.remove("js-not-hidden");
  }
  event.stopPropagation();
});

home.addEventListener("click", function (event) {
  if (!sideNav.classList.contains("js-not-hidden")) {
    event.stopPropagation();
    sideNav.classList.add("js-not-hidden");
    //alert("home:" + sideNav.classList)
  }
});
*/
closer.addEventListener("click", function (event) {
  if (this.classList.contains("closed")) {
    this.classList.remove("closed");
  }
  event.stopPropagation();
});
wrapper.addEventListener("click", function (event) {
  if (sideNav.classList.contains("js-not-hidden")) {
    sideNav.classList.remove("js-not-hidden");
    mainContent.classList.remove("push-in");
  }
  event.stopPropagation();
});
close.addEventListener("click", function (event) {
  if (sideNav.classList.contains("js-not-hidden")) {
    sideNav.classList.remove("js-not-hidden");
    mainContent.classList.remove("push-in");
  }
  event.stopPropagation();
});
home.addEventListener("click", function (event) {
  if (!sideNav.classList.contains("js-not-hidden")) {
    event.stopPropagation();
    sideNav.classList.add("js-not-hidden");
    mainContent.classList.add("push-in");
    //todo overlay
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
});
