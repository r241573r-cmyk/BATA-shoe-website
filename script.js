// ===== MOBILE NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ===== SEARCH MODAL =====
const searchModal = document.getElementById('search-modal');
const searchIcon = document.querySelector('.search-icon');
const searchClose = document.querySelector('.search-close');

if (searchIcon && searchModal && searchClose) {
  searchIcon.addEventListener('click', () => {
    searchModal.style.display = 'flex';
    document.querySelector('.search-input').focus();
  });
  searchClose.addEventListener('click', () => {
    searchModal.style.display = 'none';
  });
}

// ===== NEWSLETTER MODAL =====
const newsletterModal = document.getElementById('newsletter-modal');
const modalClose = document.querySelector('.modal-close');

if (newsletterModal && modalClose) {
  // show modal after 2 seconds
  setTimeout(() => {
    newsletterModal.style.display = 'flex';
  }, 2000);

  modalClose.addEventListener('click', () => {
    newsletterModal.style.display = 'none';
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      alert(`Thank you for subscribing with ${email}!`);
      newsletterModal.style.display = 'none';
      newsletterForm.reset();
    });
  }
}

// ===== CART FUNCTIONALITY =====
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let count = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;

    // animation for button
    const originalText = button.textContent;
    button.textContent = 'Added to Cart!';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 1500);
  });
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for contacting us! We will respond soon.");
    contactForm.reset();
  });
}

// ===== FAQ TOGGLE =====
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ===== LEAFLET MAP =====
const mapElement = document.getElementById('map');
if (mapElement) {
  const map = L.map('map').setView([-17.8292, 31.0522], 13); // Harare coords

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([-17.8292, 31.0522]).addTo(map)
    .bindPopup("<b>Bata Zimbabwe HQ</b><br>123 Shoe Street, Harare")
    .openPopup();
}
