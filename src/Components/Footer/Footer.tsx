import Swal from 'sweetalert2'; // npm install sweetalert2

import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import axios from "axios";
import { addComment, addLike, fetchComments, getLikeCount } from "../../store/action/action";

import './Footer.scss';

const commentlogo = "../../../public/commentlogo.svg";

import { Button } from "@mui/material";
import { RootState } from "../../store";

function Footer() {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);
  const comments = useAppSelector((state: RootState) => state.comment.comments);
  const likeError = useAppSelector((state: RootState) => state.like.error);

  const nbrlikes = useAppSelector((state) => state.like.nbrlikes.total_likes);
  console.log(nbrlikes);

  const email = "omovies@outlook.fr";
  const userPseudo = user.pseudo;
  const token = user.token;
  const [isOpen, setIsOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(getLikeCount());
  }, [dispatch]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const openCommentModal = () => {
    setIsCommentOpen(true);
  };
  const closeCommentModal = () => {
    setIsCommentOpen(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/api/send-mail`, {
        email: email,
        pseudo: userPseudo,
        subject: e.target.subject.value,
        message: e.target.message.value,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);

      Swal.fire({
        title: 'Succès!',
        text: 'Votre message a été envoyé avec succès.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      closeModal();

    } catch (error) {
      console.error(error);

      Swal.fire({
        title: 'Erreur!',
        text: 'Une erreur s\'est produite lors de l\'envoi du message.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = { userId: user.id, token, comment };
    const response = await dispatch(addComment(newComment));
    dispatch(fetchComments());
    closeCommentModal();
    setComment("");
  };

  const handleLikeClick = async () => {
    try {
      await dispatch(addLike({ userId: user.id, token }));
      setLikeCount(likeCount + 1);
    } catch (error) {
      console.error("Error when liking the site:", error);
      if (axios.isAxiosError(error) && error?.response?.status === 400) {
        alert("Vous avez déjà liké le site.");
      }
    }
  };

  return (
    <div className="footer-container">
      <div className="bg-black text-white p-5 flex justify-between items-center space-x-4">
        <div className="contact-div text-left">
          <h1 className="text-3xl"></h1>
          <div className="font-bold">
            <button onClick={openModal}>Nous contacter</button>
          </div>
        </div>
        <div className="commentaire-div text-center">
          <div className="font-bold">
            
            <button className="btn-comment" onClick={openCommentModal}>Laissez nous un commentaire </button>
          </div>
          <div className="font-bold">
            <p className="comment-list"></p>
            <ul className="list-comments">
              {comments && comments.data && comments.data.map((cmt) => (
                <li className="comment" key={cmt.id}>
                  <strong>{cmt.pseudo}:</strong> {cmt.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="like-div text-right">
          <div className="like-button-container">
            <div>Likez si vous aimez notre site :</div>
            <button className="font-bold" onClick={handleLikeClick}>
              <div className="lds-heart">
                <div></div>
              </div>
            </button>
          </div>
          <div className="nbr-likes">Total de Like: {nbrlikes}</div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Nous contacter
                  </Dialog.Title>
                  <form className="mt-2" onSubmit={sendEmail}>
                    <input type="email" name="email" placeholder="Email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue={email} disabled />
                    <input type="text" name="subject" placeholder="Objet" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <textarea name="message" placeholder="Veuillez écrire votre message en indiquant vos coordonnées" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">Envoyer</button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isCommentOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeCommentModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Laissez un commentaire
                  </Dialog.Title>
                  <form className="mt-2" onSubmit={handleCommentSubmit}>
                    <p className="text-sm font-medium text-gray-700">
                      Pseudo : {userPseudo}
                    </p>
                    <textarea
                      name="comment"
                      placeholder="Votre commentaire"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)} />
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Envoyer
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Footer;
