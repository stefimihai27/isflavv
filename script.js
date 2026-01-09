// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create background musical notes
    createMusicalNotes();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize section visibility
    initSectionVisibility();
    
    // Initialize gallery placeholder clicks
    initGalleryPlaceholders();
});

// Create floating musical notes in background
function createMusicalNotes() {
    const notes = ['♪', '♫', '♬', '♩', '♭', '♯', '🎵', '🎶', '🎼'];
    const bgAnimation = document.getElementById('background-animation');
    
    // Clear any existing notes
    bgAnimation.innerHTML = '';
    
    // Create 25 musical notes
    for (let i = 0; i < 25; i++) {
        const note = document.createElement('div');
        note.className = 'musical-note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        
        // Random positioning
        note.style.left = Math.random() * 100 + 'vw';
        note.style.top = Math.random() * 100 + 'vh';
        
        // Random animation
        const duration = Math.random() * 20 + 15; // 15-35 seconds
        const delay = Math.random() * 10; // 0-10 seconds delay
        
        note.style.animationDuration = duration + 's';
        note.style.animationDelay = delay + 's';
        
        // Random size and opacity
        const size = Math.random() * 30 + 20; // 20-50px
        note.style.fontSize = size + 'px';
        note.style.opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity
        
        // Random color variation
        const colors = [
            '#00f5d4', // turquoise
            '#9bf6ff', // light turquoise
            '#ffffff', // white
            '#00b8a9'  // dark turquoise
        ];
        note.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        bgAnimation.appendChild(note);
    }
}

// Initialize navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Update active nav link on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Update active class
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            // Show the clicked section
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Scroll to section
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Show only the active section
function initSectionVisibility() {
    const sections = document.querySelectorAll('.section');
    
    // Show home section by default, hide others
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });
    
    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1) || 'home';
        showSection(hash);
    });
    
    // Check initial hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        showSection(initialHash);
    }
}

// Show specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 50);
    }
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top of section
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Initialize gallery placeholder functionality
function initGalleryPlaceholders() {
    const placeholders = document.querySelectorAll('.gallery-item.placeholder');
    
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            alert('🎵 Aici vor apărea pozele tale! Încarcă-le în folderul "uploads" și actualizează index.html.');
        });
    });
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to social cards
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Update copyright year automatically
    const yearSpan = document.querySelector('.copyright');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = yearSpan.textContent.replace('2024', currentYear);
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Recreate notes on resize for better positioning
    createMusicalNotes();
});

// Add some console art for fun
console.log(`
%c🎵 FLAVV - THE ARTIST 🎵
%cSite oficial | Pitești, România
%c
%cInstagram: @isflavv
%cTikTok: @flavv_tt
%cYouTube: @isflavv
`,
'color: #00f5d4; font-size: 18px; font-weight: bold;',
'color: #9bf6ff; font-size: 14px;',
'',
'color: #ffffff;',
'color: #ffffff;',
'color: #ffffff;'
);