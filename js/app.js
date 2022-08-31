/* Navbar Collapse */
let links = document.querySelectorAll(".navbar-nav .nav-link");
let navbar = document.querySelector(".navbar-collapse");

links.forEach((link) => {
    link.addEventListener('click', ()=> {
        navbar.classList.remove("show");
    });
});


//function for load student record in table on page load 
function loadData()
{
    fetch('php/load-data.php')
    .then( (response) => response.json())
    .then( (data) => {
        
    })
}