/* ========================================
   CRITICAL.JS - Header Injection
   ======================================== */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const CLINIC_INFO = {
    phone: "08347345777",
    email: "info@drpashminwellness.com"
  };

  // 1. Inject Topbar & Navbar
  const headerEl = document.getElementById("mainNavbar");
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="topbar d-none d-md-block">
        <div class="container d-flex justify-content-between">
          <div>
            <a href="tel:${CLINIC_INFO.phone}"><iconify-icon icon="mdi:phone"></iconify-icon> +91 ${CLINIC_INFO.phone}</a>
            <a href="mailto:${CLINIC_INFO.email}"><iconify-icon icon="mdi:email"></iconify-icon> ${CLINIC_INFO.email}</a>
          </div>
          <div>
            <a href="#"><iconify-icon icon="mdi:facebook"></iconify-icon></a>
            <a href="#"><iconify-icon icon="mdi:instagram"></iconify-icon></a>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            Dr. Pashmin's<span>.</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-center">
              <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
              <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
              <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
              <li class="nav-item ms-lg-3">
                <a href="contact.html" class="btn btn-primary btn-sm px-4 py-2">Book Appointment</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    // 2. Automatically set the "active" class based on current page URL
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = headerEl.querySelectorAll(".navbar-nav .nav-link");
    
    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href");
      if (linkHref && linkHref.split("?")[0] === currentPage) {
        link.classList.add("active");
      }
    });

    // ===== NAVBAR SCROLL BEHAVIOR =====
  const navbar = document.getElementById("mainNavbar");
  const onScrollState = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 118);
  };
  window.addEventListener("scroll", onScrollState, { passive: true });
  onScrollState();
  }
});