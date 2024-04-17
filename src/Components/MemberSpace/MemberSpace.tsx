import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {  deleteUser, updateUser } from '../../store/action/action';
import HeaderProfil from './HeaderProfil/HeaderProfil';
import { UserFormData } from '../../@types/user';


interface Props {
  id: number;
}

//React.FC mean React.FunctionComponent and when we use it, TypeScript understand that MemberSpace is a functional component that accept props ( id in this case )

const MemberSpace: React.FC<Props> = ({ id }) => { 

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState<UserFormData>({
    pseudo: user.pseudo,
    email: user.email,
    birthday: user.birthday,
    password: user.password,
    token: user.token,
    id: user.id
  });
console.log(formData);
console.log(user.token);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };

  const handleDelete = () => {
    dispatch(deleteUser(user.id)); // Pass user.id to deleteUser
  };

  return (
    <div className="p-5">
      {/* <HeaderProfil /> */}
      
      <div className="pb-4">
      <h1 className="">Bienvenue dans ton espace profil, {user.pseudo}</h1>
      </div>
      
      <div className="max-w-full flexitem">
        <form onSubmit={handleSubmit} className="flex-row w-full">
          <div className="p-2">
          <label className="flex justify-between">
            Pseudo
            <input type="text" name="pseudo" value={formData.pseudo} onChange={handleChange} className=""/>
          </label>
          </div>
          <div className="p-2">
          <label className="flex justify-between">
            Mail
            <input type="email" name="email" value={formData.email} onChange={handleChange} className=""/>
          </label>
          </div>
          <div className="p-2">
          <label className="flex justify-between">
            Nouveau mot de passe
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="ml-2"/>
          </label>
          </div>
          <div className="p-2">
          <label className="flex justify-between">
            Date de naissance
          <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} className=""/>
          </label>
          </div>
          <div className="flex justify-evenly pt-4">
            <button type="submit" className="btn">Enregistrer</button>
            <button type="button" className="btn" onClick={handleDelete}>Supprimer mon compte</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberSpace;
