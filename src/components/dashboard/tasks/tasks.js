import './tasks.css';
import React from 'react';

import { TableTasks } from './table-tasks/table-tasks';

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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-plus plusIcon'
                viewBox='0 0 16 16'
              >
                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
              </svg>
            </button>
            <div
              class='modal fade'
              id='exampleModal'
              tabindex='-1'
              role='dialog'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalLabel'>
                      Criar Tarefa
                    </h5>
                    <button
                      type='button'
                      className='close'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div className='modal-body'>
                    <form>
                      <div className='form-group'>
                        <label>Nome da Tarefa</label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Nome da Tarefa'
                        />
                      </div>
                      <div class='form-group'>
                        <label for='exampleFormControlSelect1'>
                          Example select
                        </label>
                        <select
                          class='form-control'
                          id='exampleFormControlSelect1'
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div class='form-group'>
                        <label for='exampleFormControlTextarea1'>
                          Example textarea
                        </label>
                        <textarea
                          class='form-control'
                          id='exampleFormControlTextarea1'
                          rows='3'
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-dismiss='modal'
                    >
                      Fechar
                    </button>
                    <button type='button' className='btn btn-primary'>
                      Adicionar Tarefa
                    </button>
                  </div>
                </div>
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
    </div>
  );
}
