document.addEventListener("DOMContentLoaded", function () {
	console.log("JavaScript Loaded");

	// Load navbar dynamically
	fetch('navbar.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('navbar-container').innerHTML = data;

			let username = localStorage.getItem("username"); // Retrieve stored username
			let navbarUsername = document.getElementById("navbar-username");
			let logoutBtn = document.getElementById("logout-btn");
			let loginBtn = document.getElementById("login-btn");

			if (username) {
				navbarUsername.textContent = `Hello, ${username}`;
				navbarUsername.style.display = "inline";
				loginBtn.style.display = "none";  // Hide login button
				logoutBtn.style.display = "inline";  // Show logout button

				logoutBtn.addEventListener("click", function (event) {
					event.preventDefault();
					localStorage.removeItem("username");
					window.location.href = "homepage.html"; // Redirect to homepage after logout
				});
			} else {
				navbarUsername.style.display = "none";
				logoutBtn.style.display = "none";
				loginBtn.style.display = "inline";
			}
		});

	// Slideshow Auto Navigation
	let slideIndex = 0;
	let slides = document.getElementsByClassName("carousel-item");

	function showSlides() {
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
		}
		slideIndex = (slideIndex + 1) % slides.length;
		slides[slideIndex].classList.add("active");
	}

	setInterval(showSlides, 5000); // Change image every 5 seconds

	// Back to top button functionality
	let backToTopBtn = document.getElementById("backToTop");
	window.onscroll = function () {
		if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
			backToTopBtn.style.display = "block";
		} else {
			backToTopBtn.style.display = "none";
		}
	};

	backToTopBtn.addEventListener("click", function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
});
