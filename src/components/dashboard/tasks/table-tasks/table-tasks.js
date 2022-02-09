import React from 'react';
import { EditModal } from '../edit-modal/edit-modal';
export function TableTasks() {

  return (
    <div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Tarefa</th>
            <th scope='col'>Descrição</th>
            <th scope='col'>Tipo</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="pe-auto">
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button type='button' className='btn btn-primary'
                data-toggle='modal'
                data-target='#TasksModal'>
                Pendente
              </button>
              <div
                className='modal fade'
                id='TasksModal'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <EditModal />
              </div>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              {' '}
              <button type='button' className='btn btn-success'>
                Completa
              </button>
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <button type='button' className='btn btn-warning'>
                Cancelada
              </button>
            </td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <button type='button' className='btn btn-danger'>
                Rejeitada
              </button>
            </td>
          </tr>
        </tbody>
      </table >
    </div >
  );
}
