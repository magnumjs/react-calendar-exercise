import * as React from 'react';
import './modal.css';

interface DestructedOptions {
    handleClose: any;
    show: boolean;
    children?: any
}

const Modal = ({ handleClose, show, children }: DestructedOptions) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button
                    onClick={handleClose}
                >
                    Close
                </button>
            </section>
        </div>
    );
};


export default Modal;