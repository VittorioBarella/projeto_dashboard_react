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
          <tr className='pe-auto'>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button
                type='button'
                className='btn btn-primary'
                data-toggle='modal'
                data-target='#TasksModalPendente'
              >
                Pendente
              </button>
              <div
                className='modal fade'
                id='TasksModalPendente'
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
              <button
                type='button'
                className='btn btn-success'
                data-toggle='modal'
                data-target='#TasksModalCompleta'
              >
                Completa
              </button>
              <div
                className='modal fade'
                id='TasksModalCompleta'
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
            <th scope='row'>3</th>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <button
                type='button'
                className='btn btn-warning'
                data-toggle='modal'
                data-target='#TasksModalCancelada'
              >
                Cancelada
              </button>
              <div
                className='modal fade'
                id='TasksModalCancelada'
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
            <th scope='row'>4</th>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <button
                type='button'
                className='btn btn-danger'
                data-toggle='modal'
                data-target='#TasksModalRejeitada'
              >
                Rejeitada
              </button>
              <div
                className='modal fade'
                id='TasksModalRejeitada'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <EditModal />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
