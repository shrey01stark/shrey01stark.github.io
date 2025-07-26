document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.proj-img');

    projectImages.forEach(img => {
        const defaultSrc = img.src; // Store the default image source
        const hoverSrc = img.getAttribute('data-hover-src'); // Get the hover image source

        if (hoverSrc) { // Only add listeners if a hover image exists
            img.addEventListener('mouseenter', () => {
                img.src = hoverSrc;
            });

            img.addEventListener('mouseleave', () => {
                img.src = defaultSrc;
            });
        }
    });
});