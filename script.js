const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for contacting Harshitha Cleaning Center! We will contact you soon.");
    });
}