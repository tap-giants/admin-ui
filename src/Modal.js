import React from 'react';

const Modal = ({ isOpen, title, className, onClose, children }) => (
  <div className={`modal ${className} ${isOpen ? 'open' : ''}`}>
    <div className="overlay" onClick={onClose} />

    <div className="content">
      <div className="modal-header">
        <h4>{title}</h4>
        <button type="button" onClick={onClose}>&times;</button>
      </div>

      <div className="content-wrapper">
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
