const mainProduct = document.querySelector(".main-product");

// Simulate nav trigger on page load
window.addEventListener("DOMContentLoaded", () => {
  showCategories();
});

const data = {
  products: {
    label: "Product Categories",
    products: {
      Serum: [
        { name: "Niacinamide serum", description: "Brightening and smoothing.", price: 99.99, image: "IMAGES/rejuv1.jpg"},
        { name: "Gold serum", description: "Luxurious and radiant.", price: 149.99, image: "IMAGES/rejuv2.jpg" },
        { name: "Tomato serum", description: "Glow with tomato extract.", price: 89.99, image: "IMAGES/rejuv3.jpg" },
        { name: "Vitamin C serum", description: "Youthful skin glow.", price: 79.99, image: "IMAGES/serum4.jpg" }
      ],
      Rejuvenating: [
        { name: "Perfect Skin Set", description: "Rejuvenate your skin.", price: 180.99, image: "IMAGES/perfectskin.jpg" },
        { name: "Brilliant Set", description: "Enhance skin vitality.", price: 249.99, image: "IMAGES/briliianskin.jpg" },
        { name: "Cool Brezze", description: "Glow and rejuvenate.", price: 199.99, image: "IMAGES/coolbreeze.png" },
        { name: "Perfection", description: "Glowing skin kit.", price: 159.99, image: "IMAGES/perfection.jpg" }
      ],
      Feminine: [
        { name: "Feminine Wash", description: "Gentle daily wash.", price: 29.99, image: "IMAGES/fem1.jpg" },
        { name: "Feminine Wash", description: "On-the-go freshness.", price: 19.99, image: "IMAGES/fem2.jpg" },
        { name: "Feminine Wash", description: "All-day confidence.", price: 24.99, image: "IMAGES/fem3.jpg" },
        { name: "Feminine Wash", description: "Comfort and care.", price: 34.99, image: "IMAGES/fem4.jpg" }
      ],
      Perfume: [
        { name: "Lacoste", description: "Fresh scent.", price: 59.99, image: "IMAGES/perfeume1.jpg" },
        { name: "Katy Perry Meow", description: "Playful fruity scent.", price: 49.99, image: "IMAGES/perfume2.jpg" },
        { name: "Hugo Boss", description: "Sophisticated and bold.", price: 89.99, image: "IMAGES/perfume3.jpg" },
        { name: "Dior", description: "Timeless fragrance.", price: 129.99, image: "IMAGES/perfume4.jpg" }
      ]
    }
  }
};

function showCategories() {
  const categories = Object.keys(data.products.products);
  mainProduct.innerHTML = `
    <h2>Select a Category</h2>
    <div class="grid">
      ${categories.map(catId => `
        <div class="category" data-id="${catId}">
          ${catId}
        </div>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".category").forEach(item => {
    item.addEventListener("click", () => {
      const selected = item.dataset.id;
      showVariants(selected);
    });
  });
}

function showVariants(categoryId) {
  const variants = data.products.products[categoryId];
  mainProduct.innerHTML = `
    <h2>${categoryId} Products</h2>
    <div class="grid">
      ${variants.map((variant, index) => `
        <div class="variant-box">
          <img src="${variant.image}" alt="${variant.name}" />
          <h3>${variant.name}</h3>
          <p>${variant.description}</p>
          <p><strong>₱${variant.price.toFixed(2)}</strong></p>
          <div class="cart-actions">
            <input type="number" min="1" value="1" class="quantity" id="qty-${index}" />
            <button onclick="addToCart('${variant.name}', ${variant.price}, 'qty-${index}')">Add to Cart</button>
          </div>
        </div>
      `).join("")}
    </div>
    <div class="back-button">
      <button onclick="showCategories()">Back to Categories</button>
    </div>
    <div class="cart" id="cart">
      <h2>🛒 Cart</h2>
      <ul id="cart-items"></ul>
    </div>
  `;
}

let cart = [];

function addToCart(name, price, qtyId) {
  const quantity = parseInt(document.getElementById(qtyId).value);
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }

  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = cart.map((item, index) => `
    <li>
      ${item.name} (x${item.quantity}) - ₱${(item.price * item.quantity).toFixed(2)}
      <button onclick="removeFromCart(${index})">❌ Remove</button>
    </li>
  `).join("");
}


