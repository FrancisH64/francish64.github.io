window.onscroll = function() {OnScroll()};

var header = document.getElementById("hd");
var header2 = document.getElementById("hd2");
var footer = document.getElementById("ft")
var sticky = header.offsetTop;
var sticky2 = header2.offsetTop;

var data = {key: '6027d4a1dbb961e25897824c1aca7489', q: 'https://hayessim.com'}
fetch('https:///api.linkpreview.net', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data)
}).then(res => {
    if (res.status != 200) {
        console.log(res.status)
        throw new Error('something went wrong');
    }
    return res.json()
}).then(response => {
    console.log(response)
}).catch(error => {
    console.log(error)
})

function OnScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (window.scrollY > sticky && window.scrollY < sticky2) {
        header.classList.add("sticky");
        header.classList.add("shadow");
    } else {
        header.classList.remove("sticky");
        header.classList.remove("shadow");
    }
    if (window.pageYOffset > sticky2) {
        header2.classList.add("sticky");
        header2.classList.add("shadow");
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
