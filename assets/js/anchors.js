document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("h1[id], h2[id], h3[id], h4[id]").forEach(function (heading) {
    var link = document.createElement("a");
    link.href = "#" + heading.id;
    link.className = "anchor-link";
    link.innerHTML = "¶";
    link.setAttribute("aria-hidden", "true");
    heading.appendChild(link);
  });
});
