// Select elements
const artPreview = document.getElementById('art-preview');
const fontSelect = document.getElementById('font-select');
const spacingRange = document.getElementById('spacing-range');
const warmButton = document.getElementById('warm-button');
const coolButton = document.getElementById('cool-button');
const gradientButton = document.getElementById('gradient-button');
const circleButton = document.getElementById('circle-button');
const squareButton = document.getElementById('square-button');
const abstractButton = document.getElementById('abstract-button');

// Typography controls
fontSelect.addEventListener('change', () => {
    artPreview.style.fontFamily = fontSelect.value;
});

spacingRange.addEventListener('input', () => {
    artPreview.style.letterSpacing = `${spacingRange.value}px`;
});

// Color controls
warmButton.addEventListener('click', () => {
    artPreview.style.background = 'linear-gradient(90deg, #ff6347, #ff4500)';
});

coolButton.addEventListener('click', () => {
    artPreview.style.background = 'linear-gradient(90deg, #47d1ff, #0070f3)';
});

gradientButton.addEventListener('click', () => {
    artPreview.style.background = 'linear-gradient(90deg, #ff6347, #ffda47, #47d1ff)';
});

// Shape controls
circleButton.addEventListener('click', () => {
    artPreview.style.borderRadius = '50%';
});

squareButton.addEventListener('click', () => {
    artPreview.style.borderRadius = '8px';
});

abstractButton.addEventListener('click', () => {
    artPreview.style.borderRadius = '0';
    artPreview.style.background = 'repeating-linear-gradient(45deg, #0070f3, #ffffff 10px)';
});
// Select all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

// Function to highlight the current section in the menu
function highlightSection() {
    let index = sections.length;

    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

// Listen for scroll events to update section highlighting
window.addEventListener('scroll', highlightSection);
