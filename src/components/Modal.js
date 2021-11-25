import React from 'react'
import './Modal.css'

function Modal({ open, children }){
    return <div className={`Modal-container ${open? "open": "close"}`}>
                <div className={`Modal`}>{children}</div>
            </div> 
}

export default Modal;

Modal.defaultProps = {
    open: false
}