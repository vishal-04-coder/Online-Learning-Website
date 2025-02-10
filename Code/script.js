// Select elements
const popup = document.getElementById('popup');
const popupButton = document.getElementById('popupButton');
const closePopup = document.getElementById('closePopup');

// Show the popup when the button is clicked
popupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Hide the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Hide the popup when clicking outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
