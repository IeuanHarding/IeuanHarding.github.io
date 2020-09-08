






/*
    Navbar class changer.
*/

const nav = document.getElementById("navbar")

window.addEventListener("scroll", function() {

    if (window, scrollY > 10) {
        nav.classList.replace ("navbar_one","navbar_int")
    } else {
        nav.classList.replace ("navbar_int", "navbar_one")
    }
});



/*
    Deathstar fade in
*/

const deathStar = document.getElementById("deathStar")

$("#deathStar").hover(function(){
    console.log("hover")
    deathStar.classList.replace("deathStarOut", "deathStarIn")
    setTimeout(() => {
        deathStar.classList.replace("deathStarIn", "deathStarOut")
    }, 10000);});







  







