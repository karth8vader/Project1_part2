document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Capture form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Output the form data to the console
    console.log("Form Submitted:");
    console.log("Name: " + formData.name);
    console.log("Email: " + formData.email);
    console.log("Subject: " + formData.subject);
    console.log("Message: " + formData.message);

    // Optionally, reset the form
    document.getElementById("contact-form").reset();

    alert("Message sent! Check the console for the form data.");
});