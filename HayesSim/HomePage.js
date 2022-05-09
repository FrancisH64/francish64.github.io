window.onscroll = function() {OnScroll()};

var header = document.getElementById("hd");
var header2 = document.getElementById("hd2");
var footer = document.getElementById("ft")
var sticky = header.offsetTop;
var sticky2 = header2.offsetTop

function OnScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.add("shadow");
    } else {
        header.classList.remove("sticky");
        header.classList.remove("shadow");
    }
    if (window.pageYOffset > sticky2) {
        header2.classList.add("sticky");
        header2.classList.add("shadow");
        header.classList.remove("shadow");
    } else {
        header2.classList.remove("sticky");
        header2.classList.remove("shadow");
    }
    if (scrolled == 100) {
        footer.classList.remove("bottom-shadow");
    } else {
        footer.classList.add("bottom-shadow");
    }
}
