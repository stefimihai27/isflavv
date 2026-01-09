// script.js COMPLET pentru Flavv
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎵 Flavv site loaded');
    createMusicalNotes();
    initNavigation();
    initGallery();
    updateCopyright();
});

// Note muzicale animație
function createMusicalNotes() {
    const bg = document.getElementById('background-animation');
    if (!bg) return;
    
    const notes = ['♪', '♫', '♬', '♩', '🎵', '🎶'];
    for (let i = 0; i < 25; i++) {
        const note = document.createElement('div');
        note.className = 'musical-note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = (Math.random() * 20 + 15) + 's';
        note.style.animationDelay = Math.random() * 5 + 's';
        note.style.color = i % 2 === 0 ? '#00f5d4' : '#9bf6ff';
        note.style.fontSize = (Math.random() * 30 + 20) + 'px';
        bg.appendChild(note);
    }
}

// Navigare
function initNavigation() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active link
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide sections
            sections.forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
            });
            
            // Smooth scroll
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Gallery placeholder click
function initGallery() {
    document.querySelectorAll('.gallery-item.placeholder').forEach(item => {
        item.addEventListener('click', function() {
            alert('📸 Aici vor apărea pozele tale! Încarcă-le în folderul images/');
        });
    });
}

// Update copyright year
function updateCopyright() {
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        copyright.textContent = copyright.textContent.replace('2024', new Date().getFullYear());
    }
}
