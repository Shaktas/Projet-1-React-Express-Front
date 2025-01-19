import { useState } from "react";
import EditButton from "../ActionComponents/EditButton";
import Vault from "../Vaults/Vault";
import baseAvatar from "../../assets/base-avatar.jpg";
import { EditIcon } from "../../assets/Svg";
import Modal from "../Modals/Modal";
import UserControl from "../Modals/UserControl";
import { useContext, useEffect } from "react";
import { AuthenticateContext } from "../../Context/AuthenticateContext";
import { Navigate } from "react-router-dom";
import { useUserData } from "../../hooks/user/useUserData";
import { VaultContext } from "../../Context/VaultContext";

const Profil = () => {
  const { isAuthenticate } = useContext(AuthenticateContext);
  const [newsletter, setNewletter] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModifyPseudo, setIsModifyPseudo] = useState(false);
  const [isModifyEmail, setIsModifyEmail] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem("userAvatar") || baseAvatar;
  });
  const userData = useUserData();
  const { cardsFromVault: cardsVaults } = useContext(VaultContext);

  useEffect(() => {
    if (userData && userData.userPseudo && userData.userEmail) {
      setPseudo(userData.userPseudo);
      setEmail(userData.userEmail);
    }
  }, [userData]);

  useEffect(() => {
    setIsLoading(cardsVaults && cardsVaults.length > 0);
  }, [cardsVaults]);

  // Entrée utilisateur a vérifie

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("userAvatar", base64String);
        setAvatar(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  function clickPseudoHandler() {
    setIsModifyPseudo(!isModifyPseudo);
  }
  function clickEmailHandler() {
    setIsModifyEmail(!isModifyEmail);
  }

  function isModifyPseudoHandler(e) {
    if (e.key === "Enter") {
      setIsModifyPseudo(!isModifyPseudo);
    }
  }

  function isModifyEmailHandler(e) {
    if (e.key === "Enter") {
      setIsModifyEmail(!isModifyEmail);
    }
  }

  function clickHandler() {
    setIsModal(true);
  }
  function closeHandler() {
    setIsModal(false);
  }
  console.log(isLoading);

  return (
    <>
      {!isAuthenticate && <Navigate to="/auth" />}
      <div className="absolute p-0 flex justify-center items-center min-h-screen w-2/3 bg-blue-2">
        <div className="bg-blue-1 p-8 rounded-3xl shadow-lg w-full max-w-2xl m">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-6 object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 blue bg-blue-6 p-2 rounded-full cursor-pointer hover:bg-blue-7"
              >
                <EditIcon fill="white" />
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="pseudo" className="text-blue-12 font-semibold">
                Pseudo
              </label>
              {isModifyPseudo ? (
                isLoading && (
                  <div className="relative flex justify-center items-centerp-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2">
                    <input
                      type="text"
                      id="pseudo"
                      value={pseudo}
                      onChange={(e) => setPseudo(e.target.value)}
                      onKeyDown={isModifyPseudoHandler}
                      className="w-full p-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2"
                    />
                    <div className="absolute top-2 right-2 z-10">
                      <EditButton clickHandler={clickPseudoHandler} />
                    </div>
                  </div>
                )
              ) : (
                <div className="relative">
                  <p className="text-blue-12 font-semibold">{pseudo}</p>
                  <div className="absolute top-0 right-2">
                    <EditButton clickHandler={clickPseudoHandler} />
                  </div>
                </div>
              )}
            </div>
            <div className="relative space-y-1">
              <label htmlFor="password" className="text-blue-12 font-semibold">
                Email
              </label>

              {isModifyEmail ? (
                isLoading && (
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      onKeyDown={isModifyEmailHandler}
                      className="w-full p-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2"
                    />
                    <div className="absolute top-2 right-2">
                      <EditButton clickHandler={clickEmailHandler} />
                    </div>
                  </div>
                )
              ) : (
                <div className="relative">
                  <p className="text-blue-12 font-semibold">{email}</p>
                  <div className="absolute top-0 right-2">
                    <EditButton clickHandler={clickEmailHandler} />
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-6">
              {isLoading &&
                cardsVaults.map((cards) => (
                  <Vault
                    key={"Vaut" + cards.vaultId}
                    cards={cards}
                    passwordCount={Object.keys(cards.data).length}
                    userCount={3}
                    clickHandler={clickHandler}
                  />
                ))}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="newsletter"
                checked={newsletter}
                onChange={() => {
                  setNewletter(!newsletter);
                }}
                className="w-4 h-4 rounded border-blue-5 text-blue-9 focus:ring-blue-6"
              />
              <label
                htmlFor="newsletter-consent"
                className="text-sm text-blue-12"
              >
                J&apos;accepte de recevoir des NewsLetters a titre
                d&apos;informations
              </label>
            </div>
            <div className="flex  items-center space-x-2">
              <input
                type="checkbox"
                id="marketing-consent"
                className="w-4 h-4 rounded border-blue-5 text-blue-9 focus:ring-blue-6"
                checked={marketing}
                onChange={() => {
                  setMarketing(!marketing);
                }}
              />
              <label
                htmlFor="marketing-consent"
                className="text-sm text-blue-12"
              >
                J&apos;accepte de recevoir des communications commercials par
                email
              </label>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModal}
        onClose={closeHandler}
        title={"Gestion des utilisateurs"}
      >
        <UserControl />
      </Modal>
    </>
  );
};
export default Profil;
