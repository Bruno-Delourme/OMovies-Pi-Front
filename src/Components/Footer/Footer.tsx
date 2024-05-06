
import Swal from 'sweetalert2'; // npm install sweetalert2 //For mail contact 

import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import axios from "axios";
import { addComment, addLike, disLike, fetchComments, getLikeCount } from "../../store/action/action";

import './Footer.scss';

const commentlogo = "../../../public/commentlogo.svg";
const maillogo = "../../../public/mail.svg";

const heart = "../../../public/heart.svg";
const heartoff = "../../../public/heartoff.svg";

import { Button } from "@mui/material";
import { RootState } from "../../store";

function Footer() {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);
  const comments = useAppSelector((state: RootState) => state.comment.comments);
  const likeError = useAppSelector((state: RootState) => state.like.error);

  const nbrlikes = useAppSelector((state) => state.like.nbrlikes.total_likes);
  //console.log(nbrlikes);
  const [isLiked, setIsLiked] = useState(false);

  const email = "omovies@outlook.fr";
  const userPseudo = user.pseudo;
  const token = user.token;
  const [isOpen, setIsOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState<Comment[]>([]);
  const [likeCount, setLikeCount] = useState(0);


  const [likeNotification, setLikeNotification] = useState(false);
  const [commentNotification, setCommentNotification] = useState(false);
  const [dislikeNotification, setDislikeNotification] = useState(false);

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(getLikeCount())
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

  const sendEmail = async (e: { preventDefault: () => void; target: { subject: { value: any; }; message: { value: any; }; }; }) => {
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
  
      // Afficher le popup de confirmation
      Swal.fire({
        title: 'Succès!',
        text: 'Votre message a été envoyé avec succès.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      closeModal();
  
    } catch (error) {
      console.error(error);
  
      // Afficher le popup d'erreur
      Swal.fire({
        title: 'Erreur!',
        text: 'Une erreur s\'est produite lors de l\'envoi du message.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };


  const handleLikeClick = async () => {
    try {
      await dispatch(addLike({ userId: user.id, token }));
      dispatch(getLikeCount());
      setIsLiked(true);
      setLikeNotification(true); // Ajouter cette ligne
    } catch (error) {
      console.error("Error when liking the site:", error);
      if (axios.isAxiosError(error) && error?.response?.status === 400) {
        alert("Vous avez déjà liké le site.");
      }
    }
  };
  
  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = { userId: user.id, token, comment };
    const response = await dispatch(addComment(newComment));
    dispatch(fetchComments());
    closeCommentModal();
    setComment("");
    setCommentNotification(true); // Ajouter cette ligne
  };
  
  const handleDislikeClick = async () => {
    try {
      await dispatch(disLike({ userId: user.id, token }));
      dispatch(getLikeCount());
      setIsLiked(false);
      setDislikeNotification(true); // Ajouter cette ligne
    } catch (error) {
      console.error("Error when disliking the site:", error);
    }
  };


  return (
    <>
    <div className="footer-container">
      
      <div className="bg-black text-white p-5 flex justify-between">
        
        <div >
          <div className="font-bold">
          <img src={maillogo} alt="mail" />
            <button onClick={openModal}>Nous contacter</button>
          </div>
        </div>

        <div className="like">
          
          <div >
              <div className="lds-heart">
                <div></div>
              </div>
          </div>

            <div >
             {isLiked ? (
              <button>
                 <img src={heartoff} alt="heartoff" onClick={handleDislikeClick}/>
              </button>
              ) : (
               <button>
                 <img src={heart} alt="heart" onClick={handleLikeClick} />
                </button>
              )}
                        <div className="nbr-likes">{nbrlikes ? nbrlikes : 0} Likes </div>
            </div>


        </div>


        <div >
          <div className="font-bold">
          <img src={commentlogo} alt="comment" />
            <button className="btn-comment" onClick={openCommentModal}>Laisser nous un commentaire </button>
          </div>
          <div className="font-bold">
     
            <ul className="list-comments">
              {comments && comments.data && comments.data.map((cmt, index) => (
               <li className="comment" key={index}>
                 <strong>{cmt.pseudo}:</strong> {cmt.content}
               </li>
               ))}
            </ul>
          </div>
        </div>

        

      </div>



    </div>
    
    <p className="team">Team O'MOVIES : Bruno, Gwendoline, Fadwa, Mathias</p>
    
    
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
                    <form className="mt-2 space-y-4" onSubmit={sendEmail}>
                      <input type="email" name="email" className="block w-full rounded-md border-gray-300 bg-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white  sm:text-sm py-2" defaultValue={email} disabled />
                      <input type="text" name="subject" placeholder="Objet" className="block w-full rounded-md border-gray-300 bg-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white sm:text-sm py-2" />
                      <textarea name="message" placeholder="Veuillez écrire votre message en indiquant vos coordonnées" className="block w-full rounded-md border-gray-300 bg-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white sm:text-sm py-5"></textarea>
                      <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-white bg-orange-700">Envoyer</button>
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
                    Laisser un commentaire
                  </Dialog.Title>
                  <form className="mt-2 space-y-4" onSubmit={handleCommentSubmit}>
                    <p className="text-sm font-medium text-white-700  bg-black py-2">
                      Pseudo : {userPseudo}
                    </p>
                    <textarea
                      name="comment"
                      placeholder="Votre commentaire"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)} />
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2  text-white bg-orange-700"
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



    </>

  );
}
export default Footer;







