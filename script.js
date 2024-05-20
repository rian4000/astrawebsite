'use strict';

/**
 * navbar toggle in mobile
 */

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/**
 * Header scroll state
 */

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Add to favorite button toggle
 */

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });
});

/**
 * Google Places API Autocomplete
 */
function initAutocomplete() {
  const addressInput = document.getElementById('address_search');
  const autocomplete = new google.maps.places.Autocomplete(addressInput);
}

// Call initAutocomplete when the page loads
window.addEventListener('load', () => {
  initAutocomplete();
});

/**
 * Handle search button click
 */
const searchButton = document.getElementById('search_button');

searchButton.addEventListener('click', () => {
  const addressInput = document.getElementById('address_search');
  const address = addressInput.value.trim();

  if (address !== '') {
    // You can perform your search action here, for example:
    console.log('Searching for:', address);
  } else {
    console.log('Please enter a valid location');
  }
});
