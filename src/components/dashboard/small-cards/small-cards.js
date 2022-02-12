import React from 'react';
import './small-cards.css';

export function SmallCards() {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Título especial</h5>
            <p className='card-text d-flex'>
              Com suporte a texto embaixo, que funciona como uma introdução a um
              conteúdo adicional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
