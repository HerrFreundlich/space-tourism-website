
document.addEventListener("DOMContentLoaded", function() {
    var siteLocation = window.location.href;

    if (siteLocation.includes("home")) {
        document.getElementById("home").classList.add("navbar-active");
    } else if (siteLocation.includes("destination")) {
        document.getElementById("destination").classList.add("navbar-active");
    } else if (siteLocation.includes("crew")) {
        document.getElementById("crew").classList.add("navbar-active");
    } else if (siteLocation.includes("technology")) {
        document.getElementById("technology").classList.add("navbar-active");
    }
});

// Makes sure Navbar is displayed correctly when window is resized
window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 801px)").matches) {
        document.querySelector(".navbar").style.display = "flex";
    } else {
        if (document.querySelector(".navbar-icon").hasAttribute("id")) {
            document.querySelector(".navbar").style.display = "revert";
        } else {
            document.querySelector(".navbar").style.display = "none";
        }
    }
});

// Animates Mobile Design Navbar
document.querySelector(".navbar-icon").addEventListener("click", function() {
    if (this.hasAttribute("id")) {
        this.removeAttribute("id");
        this.setAttribute("src", "../../assets/shared/icon-hamburger.svg")
        document.querySelector(".navbar").style.display = "none";
    } else {
        this.setAttribute("id", "active");
        this.setAttribute("src", "../../assets/shared/icon-close.svg")
        document.querySelector(".navbar").style.display = "revert";
    }
});