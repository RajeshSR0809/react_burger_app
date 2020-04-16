import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/auxilary';
import Backdrop from '../backdrop/Backdrop';


const Modal = (props) => {
    const show = props.show;
    const backdropClickHandler = props.modalClose;
    return (
        <Aux>
            <Backdrop clickHandler={backdropClickHandler} show={show}></Backdrop>
            <div className={classes.Modal} style={{
                opacity: show ? '1' : '0',
                transform: show ? 'translateY(0)': 'translateY(-100vh)'
            }}>
                {props.children}
            </div>

        </Aux>
    );
}

export default Modal;