const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        const service = form.querySelector("select").value;
        const message = form.querySelector("textarea").value;

        const whatsappMessage =
            "New Cleaning Enquiry%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Service: " + encodeURIComponent(service) + "%0A" +
            "Message: " + encodeURIComponent(message);

        const whatsappNumber = "919731473218";

        window.open(
            "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage,
            "_blank"
        );
    });
}
