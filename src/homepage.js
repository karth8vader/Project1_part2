document.addEventListener("DOMContentLoaded", function () {
	console.log("JavaScript Loaded");

	let username = localStorage.getItem("username"); // Retrieve stored username
	let navbarUsername = document.getElementById("navbar-username");
	let logoutBtn = document.getElementById("logout");
	let loginBtn = document.getElementById("login");
	let signinBtn = document.getElementById("signin");

	// Display username in navbar if user is logged in
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

	if (logoutBtn) {
		logoutBtn.addEventListener("click", function (event) {
			event.preventDefault();
			localStorage.removeItem("username");
			window.location.href = "homepage.html";
		});
	}

	// Manual Slideshow navigation
	let slideIndex = 0;
	let slides = document.getElementsByClassName("mySlides");
	let prevBtn = document.getElementById("prev");
	let nextBtn = document.getElementById("next");

	function showSlides(index) {
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[index].style.display = "block";
	}

	showSlides(slideIndex);

	nextBtn.addEventListener("click", function () {
		slideIndex = (slideIndex + 1) % slides.length;
		showSlides(slideIndex);
	});

	prevBtn.addEventListener("click", function () {
		slideIndex = (slideIndex - 1 + slides.length) % slides.length;
		showSlides(slideIndex);
	});

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
});
