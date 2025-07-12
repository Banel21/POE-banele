document.addEventListener("DOMContentLoaded", function() {
  // Mobile menu toggle functionality
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener("click", function() {
      mobileNav.classList.toggle("active");
      
      // Change menu icon
      if (mobileNav.classList.contains("active")) {
        toggleBtn.innerHTML = "&times;";
        toggleBtn.setAttribute("aria-expanded", "true");
      } else {
        toggleBtn.innerHTML = "&#9776;";
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".mobile-nav a").forEach(function(link) {
      link.addEventListener("click", function() {
        mobileNav.classList.remove("active");
        toggleBtn.innerHTML = "&#9776;";
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function(e) {
      if (!e.target.closest(".nav-container") && mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
        toggleBtn.innerHTML = "&#9776;";
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Portfolio filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener("click", function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        
        // Add active class to clicked button
        this.classList.add("active");
        
        const filterValue = this.getAttribute("data-filter");
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
          if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // Form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");
      
      // Here you would typically send the data to a server
      console.log("Form submitted:", { name, email, subject, message });
      
      // Show success message
      alert("Thank you for your message! I'll get back to you soon.");
      this.reset();
    });
  }
});