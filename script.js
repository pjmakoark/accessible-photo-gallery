/**
 * Updates the main display area with the hovered thumbnail's image and alt text
 * @param {HTMLElement} previewPic
 */
function upDate(previewPic) {
    const displayImg = document.querySelector('#display-img');
    const altText = document.querySelector('#alt-text');

    displayImg.src = previewPic.src;
    displayImg.alt = previewPic.alt;
    displayImg.style.display = 'block';
    altText.textContent = previewPic.alt;
    altText.style.color = '#000000';
    altText.style.position = 'absolute';
    altText.style.bottom = '10px';
    altText.style.left = '10px';
    altText.style.right = '10px';
    altText.style.background = '#000000';
    altText.style.color = '#ffffff';
    altText.style.padding = '10px';
    altText.style.borderRadius = '4px';
    altText.style.fontSize = '1rem';

    // Log to console for debugging
    console.log('upDate function triggered');
}


function undo() {
    const displayImg = document.querySelector('#display-img');
    const altText = document.querySelector('#alt-text');

    displayImg.src = '';
    displayImg.alt = '';
    displayImg.style.display = 'none';
    altText.textContent = 'Hover over an image below to display here.';
    altText.style.color = '';
    altText.style.position = '';
    altText.style.bottom = '';
    altText.style.left = '';
    altText.style.right = '';
    altText.style.background = '';
    altText.style.padding = '';
    altText.style.borderRadius = '';
    altText.style.fontSize = '';

    // Log to console for debugging
    console.log('undo function triggered');
}

// Function to add tabindex attributes to thumbnails
function addTabIndices() {
    console.log('Adding tabindex attributes...');
    const thumbnails = document.querySelectorAll('.thumbnail');
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].setAttribute('tabindex', '0');
    }
}

// Handle onfocus event
function handleFocus(event) {
    console.log('Focused:', event.target);
    upDate(event.target);
}

// Handle onblur event
function handleBlur(event) {
    console.log('Blurred:', event.target);
    undo();
}

// Handle photo upload
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const displayImg = document.querySelector('#display-img');
            const altText = document.querySelector('#alt-text');

            displayImg.src = e.target.result;
            displayImg.alt = file.name;
            displayImg.style.display = 'block';
            altText.textContent = file.name;
            altText.style.color = '#000000';
            altText.style.position = 'absolute';
            altText.style.bottom = '10px';
            altText.style.left = '10px';
            altText.style.right = '10px';
            altText.style.background = '#000000';
            altText.style.color = '#ffffff';
            altText.style.padding = '10px';
            altText.style.borderRadius = '4px';
            altText.style.fontSize = '1rem';

            console.log('Photo uploaded:', file.name);
        };
        reader.readAsDataURL(file);
    }
}

// Handle page load
function handlePageLoad() {
    console.log('Page loaded successfully');
    addTabIndices();
}

// Initialize event listeners
function initializeEventListeners() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('focus', handleFocus);
        thumbnails[i].addEventListener('blur', handleBlur);
    }

    // Add upload event listener
    const uploadInput = document.getElementById('photo-upload');
    if (uploadInput) {
        uploadInput.addEventListener('change', handlePhotoUpload);
    }
}

// Initialize gallery on DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
    handlePageLoad();
    initializeEventListeners();
});
