import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../store/action/action";


function SubscribeForm() {
  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    date_of_birth: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevModalId, setPrevModalId] = useState(null);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(register(formData));
    setIsModalOpen(false);
  };

  const handleOpenModal = (modalId) => {
    if (prevModalId) {
      document.getElementById(prevModalId).close();
    }
    setIsModalOpen(true);
    setPrevModalId(modalId);
  };

  const handleInputClick = (e: { stopPropagation: () => void; }) => {
    // Stop propagation of click event to prevent modal closing
    e.stopPropagation();
  };

  const handleCloseModal = (e: { stopPropagation: () => void; }) => {
    setIsModalOpen(false);
    e.stopPropagation();
  };

  return (
    <div className="">
      <button
        className="btn"
        onClick={() => handleOpenModal("modal_inscription")}
      >
        Inscription
      </button>
      {isModalOpen && (
        <dialog
          id="modal_inscription"
          className="fixed inset-0 flex items-center justify-center"
          open
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white p-5 rounded-lg" onClick={handleInputClick}>
            <div className="flex justify-end">
              <button
                className="close-btn"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <form className="inline-flex" onSubmit={handleSubmit}>
              <input
                className="input-field mr-4"
                type="text"
                placeholder="Pseudo"
                name="pseudo"
                value={formData.pseudo}
                onChange={handleChange}
                onClick={handleInputClick}
              />
              <input
                className="input-field mr-4"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onClick={handleInputClick}
              />
              <input
                className="mr-4"
                type="date"
                placeholder="Date de naissance"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                onClick={handleInputClick}
              />
              <input
                className="input-field mr-4"
                type="password"
                placeholder="Mot de Passe"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onClick={handleInputClick}
              />
              <button
                type="submit"
                className="flex items-center justify-center pl-4 pr-4 rounded-lg border"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default SubscribeForm;