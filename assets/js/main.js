"use strict";document.addEventListener("DOMContentLoaded",function(){function e(e,t){var n=window.scrollY,o=document.getElementsByClassName("about-author")[0],i=window.scrollY+o.getBoundingClientRect().top,s=30,c=130;return n>i-c?(e.classList.remove("fixed-element"),!1):void(n+s>t?e.classList.add("fixed-element"):e.classList.remove("fixed-element"))}var t=document.querySelector(".share-bts")&&!document.querySelector(".project-post");if(t){var n=document.querySelector(".share-bts"),o=window.scrollY+n.getBoundingClientRect().top,i=document.querySelector("#toc-container"),s=window.scrollY+i.getBoundingClientRect().top;hljs.initHighlightingOnLoad(),window.addEventListener("scroll",function(){e(n,o),e(i,s)})}if(t){var c=document.querySelector("#toc-container"),l=[".single-post h1",".single-post h2",".single-post h3",".single-post h4",".single-post h5",".single-post h6"],r=gajus.Contents({articles:document.querySelectorAll(l.join(", "))});c.appendChild(r.list()),r.eventEmitter().on("ready",function(){var e=c.querySelectorAll("a");[].map.call(e,function(e){e.setAttribute("data-scroll","")}),smoothScroll.init()}),r.eventEmitter().on("change",function(e){e.previous&&(e.previous.article.classList.remove("active"),e.previous.guide.classList.remove("active")),e.current.article.classList.add("active"),e.current.guide.classList.add("active")})}});
//# sourceMappingURL=main.js.map
