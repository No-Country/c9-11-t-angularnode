import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './styles/login.css';

export const CreateAccount = () => {
  
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(!show);

  return (
    <>
      <form className="login">
        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className="login__container">
          <button className="btn btn__enter">Crear cuenta</button>
          <div className="user">
          <label>Nombre y apellido</label>
            <input type="text" />
          </div>
          <div className="user">
          <label>Email</label>
            <input type="email" />
          </div>
          <div className="user">
          <label>Numero de celular (opcional)</label>
            <input type="number" />
          </div>
          <div className="user">
          <label>Contraseña</label>
            <input type="password" />
          </div>
          <div className="user">
          <label>Repetir contraseña</label>
            <input type="password" />
          </div>
          </Modal.Body>
          <Modal.Footer className="btn__down">
            <Button className="btn btn__enter ">
              Ingresar
            </Button>
          </Modal.Footer> 
        
        </Modal>
      </form>
    </>
  );
}

