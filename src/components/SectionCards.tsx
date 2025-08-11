import React from 'react';

const cards = [
  { title: 'Artículo 1', text: 'Resumen del artículo 1.' },
  { title: 'Artículo 2', text: 'Resumen del artículo 2.' },
  { title: 'Artículo 3', text: 'Resumen del artículo 3.' },
  { title: 'Artículo 4', text: 'Resumen del artículo 4.' }
];

const SectionCards: React.FC = () => (
  <section className="container my-4">
    <div className="row justify-content-center">
      {cards.map((card, idx) => (
        <div key={idx} className="card-col mb-4 d-flex align-items-stretch">
          <div className="card h-100 w-100 custom-card d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
            <a href="#" className="btn btn-primary align-self-start mt-2">Leer más</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionCards;