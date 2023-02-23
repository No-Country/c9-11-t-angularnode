import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import axios from 'axios'
import "./styles/login.css";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
 
    
    await axios
      .post("https://nc-api-c911t.gpamic.ar/api/v1/login", data)
      .then((res) => {
        navigate("/", {
          replace: true,
        });
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
      <form className="login">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="login__container">
            <label className="btn btn__enter">Acceso Administrador</label>
            <div className="user">
              <label>Mail</label>
              <input
                type="email"
                placeholder="Enter email"
                {...register("email")}
              />
            </div>
            <div className="user">
              <label>Contraseña</label>
              <input placeholder="password" {...register("password")} />
            </div>
              <div className="user">
              <input type="submit" value="Ingresar" onClick={handleSubmit(onSubmit)} />
            </div>
          </Modal.Body>
      
        </Modal>
      </form>
    </>
  );
};
