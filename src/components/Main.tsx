import React from 'react';

const Main: React.FC = () => (
  <main className="container my-5 d-flex justify-content-center">
    <section className="main-hero-card text-center p-4 p-md-5 mx-auto">
      <h1 className="display-4 mb-3 main-hero-title">Bienvenido</h1>
      <p className="lead main-hero-text">
        En este proyecto implementamos un sitio web responsivo utilizando <b>React</b>, <b>TypeScript</b> y <b>Bootstrap 5</b>.<br />
        Adaptamos el diseño para que el menú de navegación y las tarjetas de contenido se ajusten perfectamente en <span className="main-hero-highlight">dispositivos móviles</span>, <span className="main-hero-highlight">tabletas</span> y <span className="main-hero-highlight">computadoras de escritorio</span>.
      </p>
    </section>
  </main>
);

export default Main;