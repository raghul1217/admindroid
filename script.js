// JavaScript to toggle between light and dark mode
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const sunIcon = document.querySelector('.icon-sun');
const moonIcon = document.querySelector('.icon-moon');

// Check for saved theme preference in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Switch icons
    if (body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'light-mode');
    }
});
