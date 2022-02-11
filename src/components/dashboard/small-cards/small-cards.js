import React from 'react';
import './small-cards.css';

export function SmallCards() {
  return (
    <div className='row'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Título especial</h5>
          <p className='card-text'>
            Com suporte a texto embaixo, que funciona como uma introdução a um
            conteúdo adicional.
          </p>
          <a href='#' className='btn btn-primary'>
            Visitar
          </a>
        </div>
      </div>
    </div>
  );
}
