document.addEventListener("DOMContentLoaded", () => {
  const aboutContainer = document.getElementById("about-us");

  aboutContainer.innerHTML = `
    <section class="about-section">
      <h1>About Us</h1>
      <div class="about-grid">
        <div class="about-box">
          <h2>👩 Founder</h2>
          <p><strong>Name:</strong>Annabell Cantos</p>
          <p><strong>School:</strong>ACLC COLLEGE</p>
          <p><strong>Email:</strong>reinoldcantos@gmail.com</p>
        </div>
        <div class="about-box">
          <h2>🌟 Our Journey</h2>
          <p>We started <em>THE PERFECT BELLA SKIN</em> in Calapan City in 2023., driven by a love for beauty and skincare. Our goal was simple: help people glow with confidence using safe, high-quality products.</p>
        </div>
        <div class="about-box">
          <h2>💼 Experience</h2>
          <p>With years of hands-on skincare experience as a specialist, we understand what truly works. We blend tradition, science, and care into every product we offer.</p>
        </div>
        <div class="about-box">
          <h2>💖 Our Promise</h2>
          <p>We’re committed to making you feel beautiful in your own skin. Every item we sell is crafted with care, tested with love, and delivered with passion.</p>
        </div>
        <div class="about-box">
          <h2>🌍 Our Mission</h2>
          <p>To make effective skincare accessible to all, regardless of skin type or lifestyle. We believe everyone deserves radiant, healthy skin at an affordable price.</p>
        </div>
        <div class="about-box">
          <h2>📦 What We Offer</h2>
          <p>From rejuvenating sets to vitamin-rich serums and feminine care essentials, our product line is carefully curated for your complete skincare journey.</p>
        </div>
      </div>
    </section>
  `;
});