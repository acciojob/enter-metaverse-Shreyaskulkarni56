const button = document.getElementById("enterBtn");
const status = document.getElementById("status");

button.addEventListener("click", function () {
    status.outerHTML ="<h1 id="status">Entered Metaverse</h1>";
});