import React from 'react';
import { PlusIcon } from '../../icons/plus-icon';
import { CreateTaskModal } from './create-task-modal/create-task-modal';
import { TableTasks } from './table-tasks/table-tasks';
import './tasks.css';

export function Tasks() {
  return (
    <div className='content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <h1>Tarefas</h1>
          </div>
          <div className='col-md-8'>
            <button
              type='button'
              className='btn btn-primary btn-addNewTask'
              data-toggle='modal'
              data-target='#exampleModal'
            >
              Nova Tarefa
              <PlusIcon />
            </button>
            <div
              className='modal fade'
              id='exampleModal'
              tabIndex='-1'
              role='dialog'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
            >
              <CreateTaskModal />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 mt-3'>
          <TableTasks />
        </div>
      </div>
    </div>
  );
}
