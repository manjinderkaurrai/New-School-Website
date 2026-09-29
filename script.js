/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

    if (navbar.classList.contains("show")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});


/* Close menu after clicking a link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show");
        menuBtn.innerHTML = "☰";

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   BACK TO TOP
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting ABC Public School!\n\n" +
        "Your message has been received."
    );

    contactForm.reset();

});


/* =========================
   PROSPECTUS BUTTON
========================= */

const prospectusBtn = document.getElementById("prospectusBtn");

prospectusBtn.addEventListener("click", function() {

    alert(
        "Prospectus download will be available here.\n\n" +
        "Replace this JavaScript function with your actual PDF link."
    );

});


/* =========================
   SIMPLE SCROLL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".academic-card, .facility-card, .event-card, .testimonial, .vision-card"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function(element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "all 0.6s ease";

    observer.observe(element);

});