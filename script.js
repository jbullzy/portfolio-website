document.addEventListener("DOMContentLoaded", function() {
    const fadeInSectionElements = document.querySelectorAll(".bullet");

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        fadeInSectionElements.forEach(function (section) {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (sectionTop < windowHeight) {
                section.classList.add("visible");

            } else {
                section.classList.remove("visible");
            }
        });
    }

    checkVisibility();

    window.addEventListener("scroll", checkVisibility);
})

// Get all elements with the class "collapsible"
var collapsibleElements = document.querySelectorAll(".collapsible");

// Loop through each collapsible element
collapsibleElements.forEach(function(collapsible) {
    // Add a click event listener to each collapsible element
    collapsible.addEventListener("click", function() {
        // Toggle the "active" class on the next sibling element (hidden-text)
        var hiddenText = this.nextElementSibling;
        hiddenText.classList.toggle("active");
    });
});
