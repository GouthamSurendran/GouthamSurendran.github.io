function toggle() {
    var x = document.getElementById("myTopNav");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
var prevPos = window.pageYOffset;
window.onscroll = function () {
    var currPos = window.pageYOffset;
    if (currPos > prevPos) {
        document.getElementById("myTopNav").style.display = "none";
    }
    else {
        var x = document.getElementById("myTopNav");
        if (x.className == 'navBar responsive')
            x.className = 'navBar';
        document.getElementById("myTopNav").style.display = "initial";
    }
    prevPos = currPos;
}

