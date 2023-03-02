import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
import userlogo from "../assets/icon/userlogo.png"
import axios from "axios";
import { toast } from 'react-toastify';
import { useAuth } from "../hooks/useAuth";


export const Login = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
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
    <div className="loginContainer">
      <div className="headerForm">
        <img src={ userlogo } alt="userlogo" />
        <h4>Iniciar sesión</h4>
      </div>

      <form className="loginForm" onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <div className="formItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="Correo electrónico"
            {...register("email", { required: true })}
          />
          {errors.password && <span>Este campo es requerido</span>}
        </div>

        <div className="formItem">
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
          />
          {errors.password && <span>Este campo es requerido</span>}
        </div>

        <button className="loginBtn" type="submit">Ingresar</button>
      </form>
    </div>
  );
};
