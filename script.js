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
  const options = {
    componentRestrictions: { country: 'US' } // Restrict to the United States
  };
  const searchBox = new google.maps.places.SearchBox(addressInput, options);
}

// Call initAutocomplete when the page loads
window.addEventListener('load', () => {
  initAutocomplete();
});

/**
 * Handle search button click
 */
document.addEventListener('DOMContentLoaded', function() {
  // Handle search button click
  const searchButton = document.getElementById('search_button');
  searchButton.addEventListener('click', function() {
    // Get the address input value
    const addressInput = document.getElementById('address_search');
    const address = addressInput.value.trim();

    // Redirect to the contact info page with the address parameter
    if (address !== '') {
      window.location.href = 'contact.html?address=' + encodeURIComponent(address);
    } else {
      console.log('Please enter a valid location');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Function to get URL parameters
  const getUrlParameter = (name) => {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  // Get the address parameter from the URL
  const addressParam = getUrlParameter('address');

  // Populate the address input field if the address parameter is present
  if (addressParam) {
    const addressInput = document.getElementById('address');
    addressInput.value = addressParam;
  }
});

/**
 * Submit handler for the search form
 */
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to the search form submit button
  const searchForm = document.getElementById('search_form');
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the address input value
    const addressInput = document.getElementById('address_search');
    const address = addressInput.value.trim();

    // Redirect to the contact info page with the address parameter
    if (address !== '') {
      window.location.href = 'contact.html?address=' + encodeURIComponent(address);

      // Scroll to the top of the success message element after the form is submitted
      const successMessage = document.getElementById('successMessage');
      window.scrollTo({ top: successMessage.offsetTop, behavior: 'smooth' });
    } else {
      console.log('Please enter a valid location');
    }
  });
});
