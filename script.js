// Smooth Scroll for Navigation Links
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default link click behavior

        // Get the target section from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight Active Section in Sidebar as User Scrolls
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.sidebar a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    // Highlight the corresponding navigation link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});