const Vault = ({ name, passwordCount, userCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-3 text-purple-800">{name}</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-purple-600">Passwords:</span>
          <span className="font-medium text-purple-800">{passwordCount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-purple-600">Users:</span>
          <span className="font-medium text-purple-800">{userCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Vault;
