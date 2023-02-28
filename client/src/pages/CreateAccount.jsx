import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './styles/createAccount.css';
import userIcon from "../assets/icon/userlogo.png";
import axios from "axios";
import { toast } from 'react-toastify';

export const CreateAccount = () => {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitAccountCreationForm = (data) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/register`, data)
      .then((res) => {
        toast.success("Cuenta creada con éxito");
        navigate("/login", {
          replace: true,
        });
      })
      .catch((error) => {
        console.log(`Error when sending the account creation form: ${ error }`);
        if(!error.response.data) {
          toast.error("Ha ocurrido un error, por favor inténtelo de nuevo más tarde");
          return
        }

        toast.error(error.response.data.errors[0].msg);
      });
  };

  return (
    <div className="createAccountContainer">
      <div className="headerForm">
        <img src={ userIcon } alt="userlogo" />
        <h4>Crear cuenta</h4>
      </div>

      <form className="createAccountForm" onSubmit={ handleSubmit(submitAccountCreationForm) }>
        <div className="formItem">
          <label>Nombre y apellido</label>
          <input
            type="text"
            {...register("name")}
          />
        </div>

        <div className="formItem">
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
          />
        </div>

        <div className="formItem">
          <label>Número de celular (opcional)</label>
          <input
            type="number"
            {...register("phone")}
          />
        </div>

        <div className="formItem">
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password")}
          />
        </div>

        <button className="createAccountBtn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

