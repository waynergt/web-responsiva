import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer-glass mt-5">
    <div className="container text-center py-4">
      <p className="footer-text mb-3">Síguenos en:</p>
      <div className="footer-social-links d-flex justify-content-center gap-4 mb-2">
        <a href="https://twitter.com/_wayner" className="footer-social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://facebook.com/albertolopezgt" className="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://instagram.com/_wayner" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://github.com/waynergt" className="footer-social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
      </div>
      <div className="footer-copy text-secondary small mt-2">
        &copy; {new Date().getFullYear()} WaynerGT | Proyecto UMG Chiquimulilla
      </div>
    </div>
  </footer>
);

export default Footer;