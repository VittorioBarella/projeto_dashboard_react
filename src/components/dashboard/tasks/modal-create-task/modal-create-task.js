import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
export default function ModalCreateTask() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='App'>
            <button onClick={() => setModalIsOpen(true)}> Abril Modal </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'grey',
                    },
                }}
            >
                <h1>Teste</h1>

                <div>
                    <button onClick={() => setModalIsOpen(false)}> Fechar </button>
                </div>
            </Modal>
        </div>
    )
}

