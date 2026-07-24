const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.background =
        window.scrollY > 50
            ? "rgba(0,0,0,.95)"
            : "rgba(0,0,0,.75)";
});

/* ================= BACK TO TOP ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
