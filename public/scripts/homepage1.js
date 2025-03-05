document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    let username = localStorage.getItem("username");
    let navbarUsername = document.getElementById("navbar-username");
    let logoutBtn = document.getElementById("logout");
    let loginBtn = document.getElementById("login");
    let signinBtn = document.getElementById("signin");

    // Display username in navbar if logged in
    if (username) {
        navbarUsername.textContent = `Hello, ${username}`;
        navbarUsername.style.display = "inline";
        navbarUsername.style.fontWeight = "bold";
        navbarUsername.style.fontFamily = "'Roboto', sans-serif";

        loginBtn.style.display = "none";
        signinBtn.style.display = "none";
    } else {
        navbarUsername.style.display = "none";
        loginBtn.style.display = "inline";
        signinBtn.style.display = "inline";
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("username");
            window.location.href = "homepage.html"; // Redirect to homepage
        });
    }

    // Slideshow logic - Fullscreen at the top
    let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000);
    }
    showSlides();

    // Traffic light animation
    let currentLight = 0;
    let lights = document.querySelectorAll('.light');
    function changeLight() {
        lights.forEach(light => {
            light.classList.remove('active');
        });

        lights[currentLight].classList.add('active');
        currentLight = (currentLight + 1) % lights.length;
    }
    setInterval(changeLight, 5000);

    // Back to top button functionality
    let backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
