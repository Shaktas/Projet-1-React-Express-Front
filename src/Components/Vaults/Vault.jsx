import { NavLink } from "react-router-dom";

const Vault = ({ name, passwordCount, userCount }) => {
  return (
    <NavLink to="/MyVault">
      <div className="bg-blue-3 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-3 text-blue-10">{name}</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-blue-12">Passwords:</span>
            <span className="font-medium text-blue-12">{passwordCount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-12">Users:</span>
            <span className="font-medium text-blue-12">{userCount}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Vault;
