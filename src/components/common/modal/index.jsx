import React from 'react';

const Modal = ({ className, title, children }) => {
    return (
        <div className={`modal ${className}`}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default Modal;