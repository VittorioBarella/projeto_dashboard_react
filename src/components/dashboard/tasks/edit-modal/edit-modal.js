import React from 'react';
import { TrashIcon } from '../../../icons/trash-icon';
export function EditModal() {
    return (
        <>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                            Editar Tarefa
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
                                    placeholder='Sua Tarefa'
                                />
                            </div>
                            <div class='form-group'>
                                <label for='exampleFormControlSelect1'>
                                    Tipo da Tarefa
                                </label>
                                <select
                                    className='form-control'
                                    id='exampleFormControlSelect1'
                                >
                                    <option>Selecione...</option>
                                    <option>Fazer Super Mercado</option>
                                    <option>Lavar o Carro</option>
                                    <option>Limpar a Casa</option>
                                    <option>Comprar Remédios</option>
                                    <option>Organizar a Semana</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label for='exampleFormControlTextarea1'>
                                    Descrição da Tarefa
                                </label>
                                <textarea
                                    className='form-control'
                                    id='exampleFormControlTextarea1'
                                    rows='3'
                                ></textarea>
                            </div>
                            <div className='form-group'>
                                <label for='exampleFormControlSelect1'>
                                    Status da Tarefa
                                </label>
                                <select
                                    className='form-control'
                                    id='exampleFormControlSelect1'
                                >
                                    <option></option>
                                    <option>Completa</option>
                                    <option>Pendente</option>
                                    <option>Rejeitada</option>
                                    <option>Cancelada</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-danger'>
                            Excluir Tarefa
                            <TrashIcon />
                        </button>
                        <button type='button' className='btn btn-primary'>
                            Salvar Alterações
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}



