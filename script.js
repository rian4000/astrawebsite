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


// Function to fetch property data and display on home screen
function displayProperties() {
  // Fetch property data from hidden HTML page or database
  // Parse the data into JavaScript objects

  // Example data (replace with actual data retrieval)
  const properties = [
    {
      image: 'property1.jpg',
      description: 'Beautiful house in a quiet neighborhood',
      bedrooms: 3,
      bathrooms: 2,
      price: '$300,000'
    },
    {
      image: 'property2.jpg',
      description: 'Spacious apartment with great views',
      bedrooms: 2,
      bathrooms: 1,
      price: '$200,000'
    }
    // Add more property objects as needed
  ];

  const propertyContainer = document.querySelector('.property-container');

  properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.classList.add('property-card');

    // Create elements for property information (similar to previous example)
    // ...

    // Append elements to property card
    // ...

    // Append property card to container
    propertyContainer.appendChild(propertyCard);
  });
}

// Call the displayProperties function when the page loads
window.addEventListener('load', displayProperties);

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const optIn = document.getElementById('opt-in').checked;

        // Here you can perform validation of the input fields if needed

        // For demonstration, let's assume the form is valid and the data is submitted successfully
        // You can replace this with your actual form submission logic

        // Show success message
        successMessage.style.display = 'block';

        successMessage.style.display = 'block';

        // Calculate the scroll position to center the success message vertically
        const viewportHeight = window.innerHeight;
        const successMessageRect = successMessage.getBoundingClientRect();
        const successMessageTop = successMessageRect.top + window.scrollY;
        const scrollTop = successMessageTop - (viewportHeight / 1.5) + (successMessageRect.height / 2);

        // Scroll to the calculated position
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });

        // Optional: Reset form fields after submission
        contactForm.reset();
    });
});
