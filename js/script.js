function validateForm() {
    var fullName = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var messages = document.forms["message-form"]["messages"].value;

    if (fullName == "" || birthDate == "" || !gender || messages == "") {
        alert("Mohon lengkapi semua field!");
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    document.forms["message-form"].addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        var fullName = document.forms["message-form"]["full-name"].value;
        var birthDate = document.forms["message-form"]["birth-date"].value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var messages = document.forms["message-form"]["messages"].value;

        // Display form data
        document.getElementById("sender-full-name").textContent = fullName;
        document.getElementById("sender-birth-date").textContent = birthDate;
        document.getElementById("sender-gender").textContent = gender;
        document.getElementById("sender-messages").textContent = messages;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select the hamburger menu icon
    var hamburgerMenuIcon = document.getElementById("hambuger-menu");

    // Select the navbar-nav element
    var navbarNav = document.querySelector(".navbar-nav");

    // Add click event listener to the hamburger menu icon
    hamburgerMenuIcon.addEventListener("click", function() {
        // Toggle the 'active' class on the hamburger menu icon
        this.classList.toggle("active");

        // Toggle the visibility of the navbar-nav
        navbarNav.classList.toggle("active");
    });
});
