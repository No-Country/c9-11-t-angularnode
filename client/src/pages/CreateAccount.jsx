import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './styles/login.css';



export const CreateAccount = () => {
  
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

const submit = (data) => {
  axios
    .post("https://nc-api-c911t.gpamic.ar/api/v1/register", data)
    .then((res) => {
      navigate("/");
      localStorage.setItem("token", res.data); 
    })
    .catch((error) => {
      if (error) {
        alert("Credenciales incorrectas");
      } 
    });
};


  const [show, setShow] = useState(true);
  const handleClose = () => setShow(!show);
  return (
    <>
      <form className="login" onSubmit={handleSubmit(submit)}>
        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className="login__container">
          <button className="btn btn__enter">Crear cuenta</button>
          <div className="user">
          <label>Nombre y apellido</label>
            <input type="text" 
            {...register("name")}
            />
          </div>
          <div className="user">
          <label>Email</label>
            <input type="email" 
            {...register("email")}
            />
          </div>
          <div className="user">
          <label>Numero de celular (opcional)</label>
            <input type="number" 
            {...register("phone")}
            />
          </div>
          <div className="user">
          <label>Contraseña</label>
            <input type="password" 
            {...register("password")}
            />
          </div>
          <div className="user">
          <label>Direccion</label>
            <input type="text" 
            {...register("address")}
            />
          </div>
          </Modal.Body>
          <Modal.Footer className="btn__down">
            <Button className="btn btn__enter " type="submit">
              Ingresar
            </Button>
          </Modal.Footer> 
        
        </Modal>
      </form>
    </>
  );
}

