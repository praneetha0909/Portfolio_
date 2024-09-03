document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle'); // Corrected to match the button ID
    const body = document.body;
    const dynamicText = document.querySelector('.dynamic-text');
    const roles = ['Software Engineer/Developer', 'SAP MM-PP-QM Consultant'];
    let index = 0;

    // Set initial mode based on user preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light mode if no preference is set
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌞'; // Sun icon for light mode
    } else {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙'; // Moon icon for dark mode
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '🌞';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // Function to change dynamic text
    function changeText() {
        dynamicText.textContent = roles[index];
        index = (index + 1) % roles.length;
    }

    // Change dynamic text every 2 seconds
    setInterval(changeText, 2000);
    changeText(); // Initial call to display the first role
});
