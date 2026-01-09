// Background animation for musical notes
function createMusicalNotes() {
    const notes = ['♪', '♫', '♬', '♩', '♭', '♯'];
    const bgAnimation = document.getElementById('background-animation');
    
    for (let i = 0; i < 20; i++) {
        const note = document.createElement('div');
        note.className = 'musical-note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = (Math.random() * 10 + 10) + 's';
        note.style.animationDelay = Math.random() * 5 + 's';
        note.style.fontSize = (Math.random() * 20 + 10) + 'px';
        note.style.color = i % 3 === 0 ? 'var(--turquoise)' : 
                          i % 3 === 1 ? 'var(--turquoise-light)' : 'white';
        bgAnimation.appendChild(note);
    }
}