import { useState } from 'react';
import logo from './assets/logo.png'
import Header from './components/Header';
import Main from './components/Main';
import SectionCards from './components/SectionCards';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [bounce, setBounce] = useState(false);

  // Para animar cada vez que cambia el número
  const triggerBounce = () => {
    setBounce(false);
    setTimeout(() => setBounce(true), 10);
  };

  const handleIncrement = () => {
    triggerBounce();
    setCount((c) => c + 1);
  };

  const handleDecrement = () => {
    triggerBounce();
    setCount((c) => c - 1);
  };

  const handleReset = () => {
    triggerBounce();
    setCount(0);
  };

  // Color dinámico según valor
  let valueClass = "counter-value";
  if (count > 0) valueClass += " positive";
  else if (count < 0) valueClass += " negative";

  // Añade la clase de rebote si bounce es true
  if (bounce) valueClass += " bounce";

  return (
    <>
      <Header />
      <Main />

      <section className="container text-center my-4">
        <div className="d-flex justify-content-center align-items-center gap-4 my-3 flex-wrap">
          <img src={logo} className="logo" alt="Logo UMG" />
        </div>
        <h2 className="main-hero-title">UMG CHIQUIMULILLA</h2>

        {/* Bloque contador elegante con animación */}
        <div className="counter-card mx-auto my-3">
          <div
            className={valueClass}
            onAnimationEnd={() => setBounce(false)}
          >
            {count}
          </div>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-counter" onClick={handleIncrement}>
              +1
            </button>
            <button className="btn btn-counter" onClick={handleDecrement}>
              -1
            </button>
            <button className="btn btn-reset" onClick={handleReset}>
              Reiniciar
            </button>
          </div>
        </div>

        <p className="read-the-docs">
          Esto es una prueba de una Web Responsivo
        </p>
      </section>

      <SectionCards />
      <Footer />
    </>
  );
}

export default App;