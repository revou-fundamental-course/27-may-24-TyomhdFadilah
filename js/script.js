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
