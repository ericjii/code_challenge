
/* testing for navbar function with JS--
function openNav(){
    document.getElementById("nav-bar").style.width = "250px";
    document.getElementById("nav-bar").style.display = "run-in";
}

function closeNav() {
    document.getElementById("nav-bar").style.width = "0";
}  */


function hamBurger() {
    var x = document.getElementById("nav-bar");
    if (x.className === "navigation") {
        x.className += " media";
    } else {
        x.className = "navigation";
    }
}
