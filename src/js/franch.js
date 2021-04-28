
var modal2 = document.getElementById('Modal');

var btn = document.getElementById("Btn");

var span = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
    modal2.style.display = "block";
}

span.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
