document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        // Clear previous error messages
        clearErrors();

        let isValid = true;

        // Validate Full Name
        const fullName = document.getElementById("full-name").value.trim();
        if (fullName.length < 6) {
            showError("full-name-error", "Full Name must be at least 3 characters long.");
            isValid = false;
        } else if (fullName === "") {
            showError("full-name-error", "Full Name is required.");
            isValid = false;
        }

        // Validate Enquiry
        const enquiry = document.getElementById("enquiry").value.trim();
        if (enquiry === "") {
            showError("enquiry-error", "Enquiry is required.");
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById("contact-email").value.trim();
        if (email === "") {
            showError("contact-email-error", "Email is required.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("contact-email-error", "Please enter a valid email address.");
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.color = "red"; // Optional: Change color of error message
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error-message");
        errorElements.forEach((element) => {
            element.textContent = "";
        });
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
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

// slideshow container
let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }