import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import './styles/userProfile.css';
import editIcon from "../assets/icon/editIcon.png";
import logoUrbanFood from "../assets/icon/logo.png";
import { useForm } from "react-hook-form";

export const UserProfile = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('token');
    navigate("/", {
      replace: true,
    });
    window.location.reload();
  }

  return (
    <div className='userProfileContainer'>
      <form className='profileForm'>
        <div className='firstSectionProfile'>
          <div className='avatarContainer'>
            <img
              className='avatar'
              src={`/src/assets/profileIcon/${user.profileIcon}.png`}
              alt={`avatar_${user.profileIcon}`}
            />
            <img className='editIcon' src={ editIcon } alt="Edit" />
          </div>
          <h4>{user.name}</h4>
        </div>

        <div className='secondSectionProfile'>
          <div className="formItem">
            <label>Dirección</label>
            <input
              type="text"
              value={user.address}
              {...register("address")}
            />
            <img className='editIcon' src={ editIcon } alt="Edit" />
          </div>

          <div className="formItem">
            <label>Número de celular</label>
            <input
              type="number"
              value={user.phone}
              {...register("phone")}
            />
            <img className='editIcon' src={ editIcon } alt="Edit" />
          </div>
        </div>

        <button className='logoutBtn' key={'Logout'} onClick={logOut}> Cerrar sesión</button>
      </form>

      <img className='logoUrbanFood' src={ logoUrbanFood } alt="Logo Urban Food" />
    </div>
  );
}