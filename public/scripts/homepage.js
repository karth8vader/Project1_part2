document.addEventListener("DOMContentLoaded", function () {
	console.log("JavaScript Loaded");

	// Load navbar dynamically
	fetch('navbar.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('navbar-container').innerHTML = data;
			updateNavbar(); // Ensure navbar updates properly after loading
		});

	function updateNavbar() {
		let username = localStorage.getItem("username");
		let navbarUsername = document.getElementById("navbar-username");
		let logoutBtn = document.getElementById("logout-btn");
		let loginBtn = document.getElementById("login-btn");

		if (username) {
			navbarUsername.textContent = `Hello, ${username}`;
			navbarUsername.style.display = "inline";
			navbarUsername.style.fontWeight = "bold";
			navbarUsername.style.fontFamily = "'Roboto', sans-serif";
			loginBtn.style.display = "none";
			logoutBtn.style.display = "inline";

			logoutBtn.addEventListener("click", function (event) {
				event.preventDefault();
				localStorage.removeItem("username");
				window.location.href = "homepage.html";
			});
		} else {
			navbarUsername.style.display = "none";
			logoutBtn.style.display = "none";
			loginBtn.style.display = "inline";
		}
	}

	// Fix carousel auto-play
	let carousel = document.getElementById("carouselExample");
	let carouselInstance = new bootstrap.Carousel(carousel, { interval: 5000 });

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
