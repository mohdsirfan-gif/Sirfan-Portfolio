// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isExpanded = navLinks.classList.toggle("mobile-active");
        menuButton.setAttribute("aria-expanded", String(isExpanded));
        menuButton.setAttribute(
            "aria-label",
            isExpanded ? "Close navigation menu" : "Open navigation menu"
        );
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        });
    });
}


// ================================
// SCROLL REVEAL
// ================================

const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.12 }
    );

    sections.forEach(section => observer.observe(section));
} else {
    sections.forEach(section => section.classList.add("show"));
}


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(9, 12, 18, 0.92)";
        } else {
            navbar.style.background = "rgba(9, 12, 18, 0.8)";
        }
    });
}


// ================================
// 2nd Year
// ================================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${year} Mohammad Sirfan. Built with code & curiosity.`;

}