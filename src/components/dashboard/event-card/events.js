import React from 'react';
import './event-card.css';

export function CardEvent() {
  return (
    <div className='card text-center event-card'>
      <div className='card-header text-white header-style'>Featured</div>
      <div className='card-body'>
        <h5 className='card-title'>Special title treatment</h5>
        <p className='card-text'>
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className='card-footer text-white footer-style'>2 days ago</div>
    </div>
  );
}

// ESSES EVENTOS IRÃO MUDAR APARTIR DA ESCOLHA DA DATA NO CALENDÁRIO.
