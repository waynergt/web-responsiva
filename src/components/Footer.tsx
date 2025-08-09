import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <div className="container text-center">
      <p>Síguenos en:</p>
      <a href="https://twitter.com/" className="text-white me-3">
        <i className="bi bi-twitter"></i> Twitter
      </a>
      <a href="https://facebook.com/" className="text-white me-3">
        <i className="bi bi-facebook"></i> Facebook
      </a>
      <a href="https://instagram.com/" className="text-white">
        <i className="bi bi-instagram"></i> Instagram
      </a>
    </div>
  </footer>
);

export default Footer;