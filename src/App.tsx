import { useState } from 'react';
import logo from './assets/logo.png'
import Header from './components/Header';
import Main from './components/Main';
import SectionCards from './components/SectionCards';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />

      <section className="container text-center my-4">
        <div className="d-flex justify-content-center align-items-center gap-4 my-3 flex-wrap">
          <img src={logo} className="logo" alt="Logo de la Empresa" />
        </div>
        <h2>UMG CHIQUIMULILLA</h2>
        <div className="card p-3 my-2">
          <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
            Boton de conteo de prueba... {count}
          </button>
        </div>
        <p className="read-the-docs">
          Esto es una prueba de una Web Responsiva
        </p>
      </section>

      <SectionCards />
      <Footer />
    </>
  );
}

export default App;