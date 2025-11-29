function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav buttons (both desktop and old nav)
    const navButtons = document.querySelectorAll('.nav-btn, .nav-link');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Add active class to clicked button (for header nav)
    const headerNavLinks = document.querySelectorAll('.nav-link');
    headerNavLinks.forEach(link => {
        const onclick = link.getAttribute('onclick');
        if (onclick && onclick.includes(`'${sectionId}'`)) {
            link.classList.add('active');
        }
    });

    // Add active class for old nav buttons (if they exist)
    const activeButton = event?.target;
    if (activeButton && activeButton.classList.contains('nav-btn')) {
        activeButton.classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger icon
        if (menuBtn) {
            menuBtn.classList.toggle('active');
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    }
});

// Handle initial load with hash
window.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        const section = document.getElementById(hash).closest('.content-section');
        if (section) {
            showSection(section.id);
        }
    }
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});
