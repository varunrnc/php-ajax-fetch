/* Navbar Collapse */
let links = document.querySelectorAll(".navbar-nav .nav-link");
let navbar = document.querySelector(".navbar-collapse");

links.forEach((link) => {
    link.addEventListener('click', ()=> {
        navbar.classList.remove("show");
    });
});

