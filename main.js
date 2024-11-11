// JavaScript para manejar el envío del formulario de contacto
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Gracias por ponerte en contacto con nosotros. Te responderemos pronto.");
            contactForm.reset();
        });
    }
});
