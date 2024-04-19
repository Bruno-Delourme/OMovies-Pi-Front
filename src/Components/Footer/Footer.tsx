import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppSelector } from "../../hooks/redux";
import axios from "axios";

function Footer() {
    const user = useAppSelector((state) => state.user);
    const userEmail = user.email;
    const userPseudo = user.pseudo;
    const token = user.token; 
  
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const sendEmail = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`http://localhost:3000/api/send-mail`, {
          email: userEmail,
          pseudo: userPseudo,
          subject: e.target.subject.value,
          message: e.target.message.value,
        }, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
  
        console.log(response);
  
      } catch (error) {
        console.error(error);
  
      }
    };


  return (
    <>
      <h1 className="title-configuration bg-black p-32">Ceci est un footer</h1>
      <div>
        <p>Besoin d'informations ?</p>
        <button onClick={openModal}>Nous contacter</button>
      </div>
      <div className="comment">
        <button>Laisser nous un commentaire</button>
        <p>Liste des commentaires</p>
      </div>
      <div className="like">
        <p>Liker si vous aimer notre site</p>
        <button>Liker</button>
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
                  <form className="mt-2" onSubmit={sendEmail}>
                    <input type="email" name="email" placeholder="Email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue={userEmail} disabled />
                    <input type="text" name="pseudo" placeholder="Pseudo" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue={userPseudo} disabled />
                    <input type="text" name="subject" placeholder="Objet" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <textarea name="message" placeholder="Message" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">Envoyer</button>
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