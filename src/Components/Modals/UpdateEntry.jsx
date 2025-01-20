import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useUpdateCardByVault } from "../../hooks/vault/useVaultData";

const UpdateEntry = ({
  name,
  url,
  username,
  password,
  type,
  cardId,
  vaultId,
}) => {
  const updateEntry = useUpdateCardByVault();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      url: url,
      username: username,
      password: password,
      type: type,
    },
  });

  function onSubmit(data) {
    data.vaultId = vaultId;
    data.cardId = cardId;
    try {
      updateEntry.mutate({ data });
    } catch (error) {
      console.error("Error occurred during card update:", error);
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex flex-col gap-4 mt-4">
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
                message: "Le mot de passe doit contenir au moins 8 caractères",
              },
            })}
            type="password"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
          />
          {errors.password && (
            <span className="ml-1 text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <select className="px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9">
          <option value="Website">Website</option>
          <option value="Application">Application</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-9 text-white py-2 rounded-lg hover:bg-blue-10 transition-colors"
      >
        Modifier
      </button>
    </form>
  );
};
export default UpdateEntry;

UpdateEntry.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  type: PropTypes.string,
  cardId: PropTypes.number,
  vaultId: PropTypes.number,
};
