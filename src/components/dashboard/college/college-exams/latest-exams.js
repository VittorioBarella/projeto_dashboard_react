import React from 'react';

export function LatestExams() {
  return (
    <div className='justify-content-center'>
      <h3>Últimas Provas</h3>
      <div className='list-group'>
        <a href='#' className='list-group-item list-group-item-action active'>
          Cras justo odio
        </a>
        <a href='#' className='list-group-item list-group-item-action'>
          Dapibus ac facilisis in
        </a>
        <a href='#' className='list-group-item list-group-item-action'>
          Morbi leo risus
        </a>
        <a href='#' className='list-group-item list-group-item-action'>
          Porta ac consectetur ac
        </a>
        <a href='#' className='list-group-item list-group-item-action disabled'>
          Vestibulum at eros
        </a>
      </div>
    </div>
  );
}

// AO CLICAR NA PROVA DESEJADA, O USUÁRIO PODERÁ:
// AO CLICAR EM UMA PROVA, ABRIRÁ UMA MODAL;
// VISUALIZAR O NOME DA MATÉRIA;
// DIA EM QUE A PROVA FOI REALIZADA;
// A NOTA QUE TIROU NA PROVA.
// A ORDEM MOSTRADA NO CARD, SERÁ DA MAIS ATUAL PARA A MAIS ANTIGA;
// SENDO A MAIS ATUAL A PRIMEIRA DA LISTA E A MAIS ANTIGA A ÚLTIMA.
