import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './styles/login.css';

export const Login = () => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(!show);

  return (
    <>
      <form className="login">
        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className="login__container">
          <button className="btn btn__enter">Acceso Administrador</button>
          <div className="user">
          <label>Mail</label>
            <input type="text" />
          </div>
          <div className="user">
          <label>Contraseña</label>
            <input type="text" />
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
};
