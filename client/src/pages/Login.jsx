import React from "react";
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

    toast.promise(
      axios.post(LOGIN_URL, data),
      {
        pending: "Iniciando sesión...",
        success: {
          render: (res) => {
            console.log(res.data)
            localStorage.setItem("token", res.data.data.token); 
            navigate("/", {
              replace: true,
            });
            setIsLoading(true); 
            return `Bienvenido`;
          }
        },
        error: {
          render: (error) => {
            if (error.data.response.status === 401) {
              return `Usuario o contraseña incorrectos`;
            } else {
              console.log(error)
              return `Error al iniciar sesión.`;
            }
          }
        }
      }
    )

  }



  const onErrors = (errors) => {
    console.log(errors);
  };

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
