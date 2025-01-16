import { useState, useContext } from "react";
import { AuthenticateContext } from "../../Context/AuthenticateContext";
import ToggleSwitch from "../ActionComponents/ToggleSwitch";
import { useForm } from "react-hook-form";
import { api } from "../../api/api";
import { useGetVaultsByUser } from "../../hooks/vault/useVaultData";

const NewEntry = () => {
  const [isCard, setIsCard] = useState(false);
  const { userId } = useContext(AuthenticateContext);
  const { vaults } = useGetVaultsByUser(userId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function setToggleHandler(bool) {
    setIsCard(bool);
  }

  async function onSubmit(data) {
    if (data.vaultName) {
      const vaultData = await api.vault.createVault(data.vaultName);

      if (vaultData.success) {
        console.log("Vault created");
      }
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  const toogleColor = {
    width: "w-9",
    height: "h-6",
    bgColorOn: "bg-blue-9",
    bgColorOff: "bg-blue-12",
    toggleWidth: "w-4",
    toggleHeight: "h-4",
    toggleColorOn: "bg-blue-2",
    toggleColorOff: "bg-white",
    translateX: "translate-x-3",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex justify-between items-center">
        <p>Coffre Fort ?</p>
        <ToggleSwitch isToggle={setToggleHandler} properties={toogleColor} />
        <p>Nouvelle carte ? </p>
      </div>
      {isCard ? (
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <select className="px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9">
              {Object.entries(vaults).map(([key, vault]) => (
                <option key={key} value={vault.vaultId}>
                  {vault.vaultName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <input
              {...register("name", {
                required: "Le nom est requis",
                minLength: {
                  value: 3,
                  message: "Le nom doit contenir au moins 3 caractères",
                },
              })}
              type="text"
              placeholder="Name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
            />
            {errors.name && (
              <span className="ml-1 text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              {...register("url", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "URL invalide",
                },
              })}
              type="url"
              placeholder="URL"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
            />
            {errors.url && (
              <span className="ml-1 text-red-500 text-sm">
                {errors.url.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              {...register("username", {
                required: "Le nom d'utilisateur est requis",
              })}
              type="text"
              placeholder="Username"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
            />
            {errors.username && (
              <span className="ml-1 text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              {...register("password", {
                required: "Le mot de passe est requis",
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères",
                },
              })}
              type="password"
              placeholder="Password"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
            />
            {errors.password && (
              <span className="ml-1 text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <select className="px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9">
              <option value="Website">Website</option>
              <option value="Application">Application</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <input
              {...register("vaultName", {
                required: "Le nom est requis",
                minLength: {
                  value: 3,
                  message: "Le nom doit contenir au moins 3 caractères",
                },
              })}
              type="text"
              placeholder="Name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
            />
            {errors.vaultName && (
              <span className="ml-1 text-red-500 text-sm">
                {errors.vaultName.message}
              </span>
            )}
          </div>
        </div>
      )}
      <button
        type="submit"
        className="mt-4 w-full bg-blue-9 text-white py-2 rounded-lg hover:bg-blue-10 transition-colors"
      >
        Créer
      </button>
    </form>
  );
};

export default NewEntry;
