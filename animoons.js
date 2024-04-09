window.onscroll = function() {
    var ScrollPos = window.scrollY;
    
    if (ScrollPos > 720) {
        document.getElementById("nav").style.display = "flex";
    } else {
        document.getElementById("nav").style.display = "none";
    }
}