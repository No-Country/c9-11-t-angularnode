import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
import userlogo from "../assets/icon/userlogo.png"
import axios from "axios";
import { toast } from 'react-toastify';
import { useAuth } from "../hooks/useAuth";


export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setIsLoading } = useAuth();
  const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;
  const onFormSubmit = (data) => {

    axios
      .post(LOGIN_URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        
        toast.success("Bienvenido");
        navigate("/", {
          replace: true,
        });
        setIsLoading(true);

      })
      .catch((error) => {
        console.log(error);

        toast.error("Usuario o contraseña incorrectos");
      });

  }



  const onErrors = (errors) => {
    console.log(errors);
  };



  const [show, setShow] = useState(true);

  const handleClose = () => setShow(!show);

  return (

    <form className="loginForm" onSubmit={handleSubmit(onFormSubmit, onErrors)}>


      <div className="login__title">
        <h5> <img src={userlogo} alt="userlogo" /> Iniciar sesión</h5>
      </div>

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


      <button className="btn__enter" type="submit">
        Ingresar
      </button>


    </form>

  );
};
