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
    <>
      <HeaderProfil />
      <h1>Bonjour dans ton espace profil {user.pseudo}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pseudo
          <input type="text" name="pseudo" value={formData.pseudo} onChange={handleChange} />
        </label>
        <label>
          Mail
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Mot de passe
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Date de naissance
          <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
        </label>
        <button type="submit">Enregistrer</button>
        <button type="button" onClick={handleDelete}>Supprimer mon compte</button>
      </form>
    </>
  );
};

export default MemberSpace;
