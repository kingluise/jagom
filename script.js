document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const videoSection = document.getElementById('home');
    const videoSectionHeight = videoSection.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > videoSectionHeight) {
            navbar.classList.add('green-background');
            navbar.classList.remove('transparent-navbar');
            navbar.classList.add('glow'); // Optional: Add a glow effect if needed
        } else {
            navbar.classList.add('transparent-navbar');
            navbar.classList.remove('green-background');
            navbar.classList.remove('glow');
        }
    });
});

// slow down background video
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('backgroundVideo');
    video.playbackRate = 0.7; // Adjust this value to slow down the video (e.g., 0.5 is half speed)
});
