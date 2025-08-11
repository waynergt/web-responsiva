import React from 'react';

const Header: React.FC = () => (
  <header>
    <nav className="navbar navbar-expand elegant-navbar custom-navbar-breakpoint elegant-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">WaynerGT</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavCustom"
          aria-controls="navbarNavCustom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavCustom">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Artículos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;