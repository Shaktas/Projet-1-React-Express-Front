import PropTypes from "prop-types";

function PwdLevels({ pwd }) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      <div className="p-4 rounded-lg transition-colors bg-red-400">
        <h3 className="font-semibold flex items-center justify-center mb-1">
          Weak Password
        </h3>
        <p className="text-sm flex items-center justify-center">{pwd.weak}</p>
      </div>
      <div className="p-4 rounded-lg transition-colors bg-white border-2 border-blue-5">
        <h3 className="flex items-center justify-center font-semibold mb-1">
          Normal Password
        </h3>
        <p className="flex items-center justify-center text-sm">{pwd.normal}</p>
      </div>
      <div className="p-4 rounded-lg transition-colors bg-green-300">
        <h3 className="flex items-center justify-center font-semibold mb-1">
          Strong Password
        </h3>
        <p className="flex items-center justify-center text-sm">{pwd.strong}</p>
      </div>
    </div>
  );
}

export default PwdLevels;

PwdLevels.propTypes = {
  pwd: PropTypes.shape({
    weak: PropTypes.number,
    normal: PropTypes.number,
    strong: PropTypes.number,
  }),
};