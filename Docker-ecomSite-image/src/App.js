import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(3);
  
  const products = [
    { id: 1, name: "Premiums Headphoness", price: "$199", image: "🎧", rating: 4.5 },
    { id: 2, name: "Smart Watch", price: "$299", image: "⌚", rating: 4.8 },
    { id: 3, name: "Wireless Speaker", price: "$129", image: "🔊", rating: 4.3 },
    { id: 4, name: "Laptop Stand", price: "$49", image: "💻", rating: 4.7 },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">🛒 SameerkoPasal</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#deals">Deals</a>
            <a href="#contact">Contact</a>
            <button className="cart-btn">
              🛒 Cart <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <header className="hero">
        <div className="hero-content">
          <h2>Summer Sale 2024</h2>
          <h1>UP TO 50% OFF</h1>
          <p>Premium electronics & gadgets with free shipping</p>
          <button className="shop-btn">Shop Now →</button>
        </div>
      </header>

      {/* Featured Products */}
      <section className="products">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <div className="rating">{"⭐".repeat(5)} ({product.rating})</div>
              <p className="price">{product.price}</p>
              <button className="add-to-cart" onClick={() => setCartCount(cartCount + 1)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature">
          <div className="feature-icon">↩️</div>
          <h3>30-Day Returns</h3>
          <p>No questions asked</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>100% secure & encrypted</p>
        </div>
        <div className="feature">
          <div className="feature-icon">☎️</div>
          <h3>24/7 Support</h3>
          <p>Always here to help</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 SameerkoPasal. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
