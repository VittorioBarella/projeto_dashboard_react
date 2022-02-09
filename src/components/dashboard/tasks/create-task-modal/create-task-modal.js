export function CreateTaskModal() {
    return (
        <>
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
                            <div className='form-group'>
                                <label for='exampleFormControlSelect1'>
                                    Tipo da Tarefa
                                </label>
                                <select
                                    className='form-control'
                                    id='exampleFormControlSelect1'
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
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
                            Criar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
