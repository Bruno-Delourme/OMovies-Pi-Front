import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUserById, updateUser } from '../../store/action/action';
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
    date_of_birth: user.date_of_birth,
    password: user.password,
  });

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };

  return (
    <>
      <HeaderProfil />
      <h1>MemberSpace

{user.pseudo}</h1>
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
          Télephone
          <input type="tel" name="phone" disabled />
        </label>
        <label>
          Mot de passe
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Date de naissance
          <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
        </label>
        <label>
          Photo de profil
          <input type="file" accept="image/*" />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
    </>
  );
};

export default MemberSpace;
