import React from 'react';

export function LatestTasks() {
  return (
    <>
      <h3> Últimas Tarefas</h3>
      <table className='table table-hover bg-light'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Primeiro</th>
            <th scope='col'>Último</th>
            <th scope='col'>Nickname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td colspan='2'>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
