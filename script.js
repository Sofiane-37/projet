document.getElementById("T").addEventListener("click", function() {
    let s = document.getElementById("cacher").style.display;

    if (s == "block") {
        document.getElementById("cacher").style.display = "none";
    } else {
        document.getElementById("cacher").style.display = "block";
    }
});



