function addTabIndices() {
    console.log('Adding tabindex attributes...');
    const figures = document.querySelectorAll('figure');
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute('tabindex', '0');
    }
}

function handlePageLoad() {
    console.log('Page loaded successfully');
    addTabIndices();
}

function handleMouseOver(event) {
    console.log('Mouse over:', event.target);
}

function handleMouseLeave(event) {
    console.log('Mouse leave:', event.target);
}

function handleFocus(event) {
    console.log('Focused:', event.target);
}

function handleBlur(event) {
    console.log('Blurred:', event.target);
}

function initializeEventListeners() {
    const figures = document.querySelectorAll('figure');
    for (let i = 0; i < figures.length; i++) {
        figures[i].addEventListener('mouseover', handleMouseOver);
        figures[i].addEventListener('mouseleave', handleMouseLeave);
        figures[i].addEventListener('focus', handleFocus);
        figures[i].addEventListener('blur', handleBlur);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    handlePageLoad();
    initializeEventListeners();
});