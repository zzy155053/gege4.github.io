/**
 * Hamburger Menu Toggle Script
 * Handles the opening and closing of the mobile navigation menu
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button and navigation elements
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    // Only run if both elements exist (prevents errors on pages without menu)
    if (menuToggle && mainNav) {
        // Add click event listener to hamburger button
        menuToggle.addEventListener('click', function() {
            // Toggle 'active' class on both button and navigation
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Close menu when clicking outside of it (optional enhancement)
        document.addEventListener('click', function(event) {
            // Check if click is outside the nav and button
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnButton = menuToggle.contains(event.target);
            
            // If click is outside both nav and button, close the menu
            if (!isClickInsideNav && !isClickOnButton) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
        
        // Close menu when a navigation link is clicked (mobile only)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Close menu after clicking a link (only on mobile)
                if (window.innerWidth <= 768) {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            });
        });
    }
});
