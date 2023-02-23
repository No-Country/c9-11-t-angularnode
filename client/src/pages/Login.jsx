import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post("https://nc-api-c911t.gpamic.ar/api/v1/login", data)
      .then((res) => {
        navigate("/", {
          replace: true,
        });
        localStorage.setItem("token", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(!show);

  return (
    <>
      <form className="login" onSubmit={handleSubmit(submit)}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="login__container">
            <button className="btn btn__enter">Acceso Administrador</button>
            <div className="user">
              <label>Mail</label>
              <input
                type="text"
                placeholder="Enter email"
                {...register("email")}
              />
            </div>
            <div className="user">
              <label>Contraseña</label>
              <input
                type="password"
                {...register("password")}
                placeholder="password"
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
};
