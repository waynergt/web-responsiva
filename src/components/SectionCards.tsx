import React from 'react';

const cards = [
  {
    title: 'Artículo 1',
    text: 'Resumen del artículo 1.',
    img: 'https://via.placeholder.com/300x150?text=Artículo+1'
  },
  {
    title: 'Artículo 2',
    text: 'Resumen del artículo 2.',
    img: 'https://via.placeholder.com/300x150?text=Artículo+2'
  },
  {
    title: 'Artículo 3',
    text: 'Resumen del artículo 3.',
    img: 'https://via.placeholder.com/300x150?text=Artículo+3'
  }
];

const SectionCards: React.FC = () => (
  <section className="container my-4">
    <div className="row">
      {cards.map((card, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <img src={card.img} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href="#" className="btn btn-primary">Leer más</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionCards;