document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const contactBtn = document.querySelector(".btn.primary");
    const contactLink = document.getElementById("contact-link");
    const closeBtn = document.querySelector(".close-btn");

    function showForm() {
        contactForm.style.display = "flex";
    }

    function hideForm() {
        contactForm.style.display = "none";
    }

    contactBtn.addEventListener("click", showForm);
    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        showForm();
    });
    closeBtn.addEventListener("click", hideForm);
});
