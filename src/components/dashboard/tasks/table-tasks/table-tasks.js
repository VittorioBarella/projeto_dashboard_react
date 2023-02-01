import React from 'react';
import { EditModal } from '../edit-modal/edit-modal';

const tasks = [
  {
    id: 1,
    name: 'Tarefa 1',
    description: 'Descrição da tarefa 1',
    type: 'Tipo 1',
    status: 'Pendente'
  },
  {
    id: 2,
    name: 'Tarefa 2',
    description: 'Descrição da tarefa 2',
    type: 'Tipo 2',
    status: 'Completa'
  }
  // adicione mais tarefas aqui, se necessário
];

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
          {tasks.map(task => (
            <tr key={task.id}>
              <th scope='row'>{task.id}</th>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.type}</td>
              <td>
                <button
                  type='button'
                  className={`btn btn-${task.status === 'Pendente'
                      ? 'primary'
                      : task.status === 'Completa'
                        ? 'success'
                        : task.status === 'Cancelada'
                          ? 'warning'
                          : 'danger'
                    }`}
                  data-toggle='modal'
                  data-target={`#TasksModal${task.status}`}
                >
                  {task.status}
                </button>
                <div
                  className='modal fade'
                  id={`TasksModal${task.status}`}
                  tabIndex='-1'
                  role='dialog'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <EditModal />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
