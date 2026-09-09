document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        // Clear previous error messages
        clearErrors();

        let isValid = true;

        // Full Name
        const fullName = document.getElementById("full-name").value.trim();
        if (fullName.length < 6) {
            showError("full-name", "Full Name must be at least 3 characters long.");
            isValid = false;
        }

        // Username
        const username = document.getElementById("username").value.trim();
        if (username === "") {
            showError("username", "Username is required.");
            isValid = false;
        }

        // Password
        const password = document.getElementById("password").value;
        const reEnterPassword = document.getElementById("re-enter-password").value;
        if (password.length < 6) {
            showError("password", "Password must be at least 6 characters long.");
            isValid = false;
        } else if (!containsUniqueCharacter(password)) {
            showError("password", "Password must contain at least one unique character (e.g., !@#$%^&*).");
            isValid = false;
        } else if (password !== reEnterPassword) {
            showError("re-enter-password", "Passwords do not match.");
            isValid = false;
        }

        // Email
        const email = document.getElementById("Email").value.trim();
        const reEnterEmail = document.getElementById("Re-Enter-Email").value.trim();
        if (email === "") {
            showError("Email", "Email is required.");
            isValid = false;
        } else if (email !== reEnterEmail) {
            showError("Re-Enter-Email", "Emails do not match.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("Email", "Please enter a valid email address.");
            isValid = false;
        }

        // Phone Number
        const phone = document.getElementById("phone").value.trim();
        if (phone === "") {
            showError("phone", "Phone Number is required.");
            isValid = false;
        }

        // Date of Birth
        const dob = document.getElementById("DOB").value;
        if (dob === "") {
            showError("DOB", "Date of Birth is required.");
            isValid = false;
        }

        // Age
        const age = document.getElementById("Age").value;
        if (age === "") {
            showError("Age", "Age is required.");
            isValid = false;
        }

        // Building Number
        const buildingNumber = document.getElementById("BN").value;
        if (buildingNumber === "") {
            showError("BN", "Building number is required.");
            isValid = false;
        }

        // Street Name
        const streetName = document.getElementById("SN").value.trim();
        if (streetName === "") {
            showError("SN", "Street name is required.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(elementId, message) {
        const errorElement = document.createElement("span");
        errorElement.className = "error-message";
        errorElement.textContent = message;
        errorElement.style.color = "red"; 
        const inputBox = document.getElementById(elementId).parentElement;
        inputBox.appendChild(errorElement);
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error-message");
        errorElements.forEach((element) => {
            element.remove();
        });
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function containsUniqueCharacter(password) {
        const uniqueCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        return uniqueCharPattern.test(password);
    }
});

// Get to the top button
var mybutton = document.getElementById("backToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
