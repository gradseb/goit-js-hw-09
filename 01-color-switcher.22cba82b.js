!function(){var t,e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");function d(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t=setTimeout(d,1e3)}e.addEventListener("click",(function(){this.disabled=!0,o.disabled=!1,d()})),o.addEventListener("click",(function(){this.disabled=!0,e.disabled=!1,clearTimeout(t)}))}();
//# sourceMappingURL=01-color-switcher.22cba82b.js.map
