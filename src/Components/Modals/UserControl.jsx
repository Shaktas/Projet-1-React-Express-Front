import { useState } from "react";
import { useForm } from "react-hook-form";

const UserControl = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "user1@example.com" },
    { id: 2, email: "user2@example.com" },
    { id: 3, email: "user3@example.com" },
    { id: 4, email: "user4@example.com" },
    { id: 5, email: "user5@example.com" },
    { id: 6, email: "user6@example.com" },
    { id: 7, email: "user7@example.com" },
    { id: 8, email: "user8@example.com" },
    { id: 9, email: "user9@example.com" },
    { id: 10, email: "user10@example.com" },
    { id: 11, email: "user11@example.com" },
    { id: 12, email: "user12@example.com" },
    { id: 13, email: "user13@example.com" },
    { id: 14, email: "user14@example.com" },
    { id: 15, email: "user15@example.com" },
    { id: 16, email: "user16@example.com" },
    { id: 17, email: "user17@example.com" },
    { id: 18, email: "user18@example.com" },
    { id: 19, email: "user19@example.com" },
    { id: 20, email: "user20@example.com" },
    { id: 21, email: "user21@example.com" },
    { id: 22, email: "user22@example.com" },
    { id: 23, email: "user23@example.com" },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleDelete = (userId) => {
    console.log(userId);
  };

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <div className="flex-1">
          <input
            {...register("email", {
              required: "L'email est requis",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Format d'email invalide",
              },
              // validate check email
            })}
            type="email"
            placeholder="Ajouter le mail de l'utilisateur"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-9 text-white px-4 py-2 rounded-lg hover:bg-blue-10 transition-colors"
        >
          Ajouter
        </button>
      </form>
      <div className="flex flex-col gap-3 max-h-[80vh] overflow-y-scroll">
        <h4 className="font-semibold text-blue-12">Utilisateurs du vault :</h4>
        {users.map((user) => (
          <div
            key={"KeyUserControl" + user.id}
            className="flex justify-between items-center p-2 mx-2 bg-blue-2 rounded-lg"
          >
            <span className="text-blue-12">{user.email}</span>
            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserControl;
