javascript: (function () {
  var gg=document.documentElement.innerHTML;
  document.documentElement.innerHTML =
    `<data-bs-theme="dark">`+ gg;
})();