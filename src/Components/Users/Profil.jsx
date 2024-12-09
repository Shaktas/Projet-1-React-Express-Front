import { useState } from "react";
import EditButton from "../ActionComponents/EditButton";
import Vault from "../Vaults/Vault";
import baseAvatar from "../../assets/base-avatar.jpg";
import { EditIcon } from "../../assets/Svg";
import Modal from "../Modals/Modal";
import UserControl from "../Modals/UserControl";
import { useContext } from "react";
import { VaultContext } from "../../Context/VaultContext";

const Profil = () => {
  const [pseudo, setPseudo] = useState("JohnDoe");
  const [password, setPassword] = useState("HelloWorld");
  const [isModifyPseudo, setIsModifyPseudo] = useState(false);
  const [isModifyPwd, setIsModifyPwd] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem("userAvatar") || baseAvatar;
  });
  const { vaultName } = useContext(VaultContext);

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
  function clickPwdHandler() {
    setIsModifyPwd(!isModifyPwd);
  }

  function isModifyPseudoHandler(e) {
    if (e.key === "Enter") {
      setIsModifyPseudo(!isModifyPseudo);
    }
  }

  function isModifyPwdHandler(e) {
    if (e.key === "Enter") {
      setIsModifyPwd(!isModifyPwd);
    }
  }

  function clickHandler() {
    setIsModal(true);
  }
  function closeHandler() {
    setIsModal(false);
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-2/3 bg-blue-2">
        <div className="bg-blue-1 p-8 rounded-3xl shadow-lg w-full max-w-2xl">
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
                Mot de passe
              </label>

              {isModifyPwd ? (
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onKeyDown={isModifyPwdHandler}
                    className="w-full p-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2"
                  />
                  <div className="absolute top-2 right-2">
                    <EditButton clickHandler={clickPwdHandler} />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <p className="text-blue-12 font-semibold">
                    {"•".repeat(password.length)}
                  </p>
                  <div className="absolute top-0 right-2">
                    <EditButton clickHandler={clickPwdHandler} />
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Vault
                name={vaultName}
                passwordCount={5}
                userCount={3}
                clickHandler={clickHandler}
              />
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
