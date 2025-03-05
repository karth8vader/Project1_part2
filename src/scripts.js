document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(member => {
        member.addEventListener("click", () => {
            const designation = member.querySelector(".designation");

            // Hide all designations first (prevents multiple open)
            document.querySelectorAll(".designation").forEach(d => d.style.display = "none");

            // Toggle visibility
            if (designation.style.display === "block") {
                designation.style.display = "none";
            } else {
                designation.style.display = "block";
            }
        });
    });
});
