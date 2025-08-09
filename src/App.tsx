import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import SectionCards from './components/SectionCards';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />

      {/* Puedes dejar tu logo y contador como sección de ejemplo */}
      <section className="container text-center my-4">
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" style={{ height: 80, margin: 8 }} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/react.svg" className="logo react" alt="React logo" style={{ height: 80, margin: 8 }} />
          </a>
        </div>
        <h2>Vite + React</h2>
        <div className="card p-3 my-2">
          <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edita <code>src/App.tsx</code> y guarda para probar HMR
          </p>
        </div>
        <p className="read-the-docs">
          Haz clic en los logos para aprender más
        </p>
      </section>

      <SectionCards />
      <Footer />
    </>
  );
}

export default App;