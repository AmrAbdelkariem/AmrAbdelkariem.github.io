// Smooth scrolling on button click
document.getElementById('scrollButton').addEventListener('click', function () {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Highlight active navbar link when scrolling
document.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                document
                    .querySelector("nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
});

// Initialize Typed.js
var typed = new Typed("#dynamic-text", {
    strings: ['Amr Khaled', 'a Cybersecurity Engineer', 'a Linux Enthusiast', 'a Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true       // Loop infinitely
});

