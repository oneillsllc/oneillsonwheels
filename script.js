/* Site behavior. You don't need to edit this file.
   Weekly content (menu list, stops, Facebook link) lives in menu.js. */
(function () {
  "use strict";
  var c = typeof siteContent === "object" ? siteContent : {};

  function text(el, s) { el.textContent = s; return el; }

  document.addEventListener("DOMContentLoaded", function () {
    // Menu list
    var list = document.getElementById("quest-list");
    if (list && Array.isArray(c.quests) && c.quests.length) {
      list.innerHTML = "";
      c.quests.forEach(function (q) { list.appendChild(text(document.createElement("li"), q)); });
    }

    // Week label
    var wl = document.getElementById("week-label");
    if (wl && c.weekLabel) { wl.hidden = false; text(wl, c.weekLabel); }

    // Weekly stops
    var stops = document.getElementById("stops");
    var empty = document.getElementById("stops-empty");
    if (stops && Array.isArray(c.stops) && c.stops.length) {
      c.stops.forEach(function (s) {
        var li = document.createElement("li");
        li.appendChild(text(document.createElement("strong"), s.day || ""));
        li.appendChild(text(document.createElement("span"), s.place || ""));
        stops.appendChild(li);
      });
      stops.hidden = false;
      if (empty) empty.hidden = true;
    }

    // Facebook: only link it once a real URL is set in menu.js
    var fb = (c.facebookUrl || "").trim();
    if (/^https?:\/\//.test(fb)) {
      document.querySelectorAll(".fb-link").forEach(function (span) {
        var a = document.createElement("a");
        a.href = fb; a.target = "_blank"; a.rel = "noopener"; a.textContent = span.textContent;
        span.replaceWith(a);
      });
      document.querySelectorAll(".fb-button, .fb-link-a").forEach(function (a) {
        a.href = fb; a.target = "_blank"; a.rel = "noopener"; a.hidden = false;
      });
      document.querySelectorAll(".fb-item").forEach(function (li) { li.hidden = false; });
    }

    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  });
})();
