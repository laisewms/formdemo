const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
});

// back to top btn

const backToTopButton = document.querySelector("#back-to-top-btn")

window.addEventListener("scroll", scrollFunction);

function scrollFunction () {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display ="block"
    }
    else {
        backToTopButton.style.display = "none"
    }
}

backToTopButton.addEventListener("click", backToTop)

function backToTop() {
    window.scrollTo(0,0);
}